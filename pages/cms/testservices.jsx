import dbConnect from "../../util/mongodb";
import Link from "next/link";
import Organisation from "../../models/Organisation";

const Users = ({ testorganisations }) => {
  return (
    <>
      <Link href="/apicms">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <div className="userMng">
          <h2></h2>
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Organisatie</th>
                <th>Contact-Email</th>
                <th>Regio</th>
                <th>
                  <Link href="/newOrganisation">
                    <div className="createNew">
                      <p>Nieuwe testorganisatie</p>
                    </div>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {testorganisations.map((org) => (
                <tr key={org._id}>
                  <td>{org.name}</td>
                  <td>{org.region}</td>
                  <td>{org.email}</td>
                  <td>{org.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const resultOrg = await Organisation.find({});
  const testorganisations = resultOrg.map((doc) => {
    const org = doc.toObject();
    org._id = org._id.toString();
    return org;
  });

  return { props: { testorganisations: testorganisations } };
}

export default Users;
