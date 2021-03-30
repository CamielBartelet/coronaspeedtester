import dbConnect from "../../util/mongodb";
import Accounts from "../../models/User";
import Link from "next/link";

const Users = ({ accounts }) => {
  return (
    <>
      <Link href="/apicms">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <div className="userMng">
          <h2>Gebruikers:</h2>
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Naam</th>
                <th>Achternaam</th>
                <th>Email</th>
                <th>Regio</th>
                <th>Testresultaat</th>
              </tr>
            </thead>
            <tbody>
              {accounts.reverse().map((account) => (
                <tr key={account._id}>
                  <td>{account.firstname}</td>
                  <td>{account.lastname}</td>
                  <td>{account.email}</td>
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

  const resultAcc = await Accounts.find({});

  const accounts = resultAcc.map((doc) => {
    const account = JSON.parse(JSON.stringify(doc));
    console.log(account);
    return account;
  });

  return { props: { accounts: accounts } };
}

export default Users;
