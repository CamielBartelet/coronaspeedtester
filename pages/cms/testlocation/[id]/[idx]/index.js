import dbConnect from "../../../../../util/mongodb";
import User from "../../../../../models/User";
import { useRouter } from "next/router";
import Link from "next/link";

const Users = ({ accounts }) => {
  const router = useRouter();
  return (
    <>
      <Link href={`/cms/testlocation/${router.query.id}`}>
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
                  <td>{account.firstName}</td>
                  <td>{account.lastName}</td>
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

  const resultAcc = await User.find({});

  const accounts = resultAcc.map((doc) => {
    const account = doc.toObject();
    account.emailVerified = account.emailVerified.toString();
    account.createdAt = account.createdAt.toString();
    account.updatedAt = account.updatedAt.toString();
    account._id = account._id.toString();
    return account;
  });

  return { props: { accounts: accounts } };
}

export default Users;
