import { useState } from "react";
import dbConnect from "../../../../../util/mongodb";
import User from "../../../../../models/User";
import { useRouter } from "next/router";
import Link from "next/link";

const Users = ({ accounts }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const locID = router.query.id;
  const apptID = router.query.idx;

  console.log(router.query.idx);

  const handleDelete = async () => {
    try {
      await fetch(`/api/appointments/${apptID}`, {
        method: "Delete",
      });
      router.push(`/cms/testlocation/${locID}/appointmentDash`);
    } catch (error) {
      setMessage("Failed to delete the appointment.");
    }
  };
  return (
    <>
      <Link href={`/cms/testlocation/${router.query.id}`}>
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <button onClick={handleDelete}>Delete appointment slot</button>
        <div className="userMng">
          <h2>Testpersonen:</h2>
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
        {message && <p>{message}</p>}
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
