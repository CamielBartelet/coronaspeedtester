import dbConnect from "../../util/mongodb";
import Account from "../../models/accounts";
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
                  <td>{account.name}</td>
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

  const resultAcc = await Account.find({});
  const accounts = resultAcc.map((doc) => {
    const account = doc.toObject();
    account._id = account._id.toString();
    return account;
  });

  return { props: { accounts: accounts } };
}

export default Users;
