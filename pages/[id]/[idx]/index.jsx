import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/client";
import UserForm from "../../../appBuild/Components/appComp/userFormat";
import useSWR from "swr";
import dbConnect from "../../../util/mongodb";
import Event from "../../../models/Event";
import Appointment from "../../../models/Appointment";
import HeadMenu from "../../../appBuild/Components/appComp/menu/menu";
import TestPlanner from "../../../appBuild/Components/appComp/testPlanner";
// import GoogleMap from "../../../appBuild/Components/appComp/reactgmap";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const PlanTest = ({ events, appointments }) => {
  const [locations, setLocations] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const { data: account, error } = useSWR(
    id ? `/api/accounts/${id}` : null,
    fetcher
  );

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/5644EV.json?access_token=${process.env.MAPBOX_KEY}&bbox=5.449445423524878,51.41544961743736,5.51083005810591,51.45596102749366&limit=10`;

  if (error) return <p>Failed to load</p>;
  if (!account) return <p>Loading...</p>;

  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchLocations();
  }, []);

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
                <>
                  <TestPlanner
                    events={events}
                    account={account}
                    appointments={appointments}
                    locations={locations}
                  />
                </>
              )}
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

  const resultAppoint = await Appointment.find({});

  const appointments = resultAppoint.map((doc) => {
    const appointment = doc.toObject();
    appointment._id = appointment._id.toString();
    return appointment;
  });

  return { props: { events: events, appointments: appointments } };
}

export default PlanTest;
