import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/client";
import UserForm from "../appBuild/Components/appComp/userFormat";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const AccountPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: account, error } = useSWR(
    id ? `/api/accounts/${id}` : null,
    fetcher
  );

  console.log(id, account?.email + "hi");

  if (error) return <p>Failed to load</p>;
  if (!account) return <p>Loading...</p>;

  const accountForm = {
    email: account.email,
    emailVerified: account.emailVerified,
    createdAt: account.createdAt,
    updatedAt: account.updatedAt,
    phone: account.phone || "",
    bsnnumber: account.bsnnumber || "",
  };

  return (
    <>
      {!account && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {account && (
        <>
          Signed in as {account.email} <br />
          <button onClick={signOut}>Sign out</button>
          <main className="container">
            <div className="mainApp">
              {!account.bsnnumber || !account.phone ? (
                <>
                  <div className="headerWrap">Vul je gegevens in</div>
                  <div className="mainContent">
                    <UserForm
                      formId="add-persdata-form"
                      accountForm={accountForm}
                      forNewAccount={false}
                    />
                  </div>
                </>
              ) : (
                <div>Kies je evenement</div>
              )}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default AccountPage;
