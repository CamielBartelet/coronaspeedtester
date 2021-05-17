import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/client";
import UserForm from "../../appBuild/Components/appComp/userFormat";
import useSWR from "swr";
import dbConnect from "../../util/mongodb";
import Event from "../../models/Event";
import HeadMenu from "../../appBuild/Components/appComp/menu/menu";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const ProfileSettings = ({ events }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: account, error } = useSWR(
    id ? `/api/accounts/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!account) return <p>Loading...</p>;

  const accountForm = {
    email: account.email,
    emailVerified: account.emailVerified,
    createdAt: account.createdAt,
    updatedAt: account.updatedAt,
    phone: account.phone || "",
    bsnnumber: account.bsnnumber || "",
    postalCode: account.postalCode || "",
  };

  return (
    <>
      {!account && (
        <>
          Niet ingelogd <br />
          <button onClick={signIn}>Log in</button>
        </>
      )}
      {account && (
        <>
          <main className="container">
            <div className="mainApp">
              <div className="headerWrap">
                <HeadMenu loggedIn={true} account={account} />
              </div>
              <div className="headerWrap">Profiel instellingen</div>
              <div className="mainContent">
                <UserForm
                  formId="add-persdata-form"
                  accountForm={accountForm}
                  forNewAccount={false}
                />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Event.find({});

  const events = result.map((doc) => {
    const event = doc.toObject();
    event._id = event._id.toString();
    return event;
  });

  return { props: { events: events } };
}

export default ProfileSettings;
