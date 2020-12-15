import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../util/mongodb";
import Account from "../../models/accounts";

const UserPage = ({ account }) => {
  //   const router = useRouter();
  const [message, setMessage] = useState("");

  return (
    <>
      <div key={account._id}>
        <div>
          <h5>{account.name}</h5>
          <div>
            <p>{account.lastname}</p>
            <p>Owner: {account.email}</p>
            <p>Capacity:{account.password}</p>
            <p>Date: {account.postalCode}</p>
            <p>Email: {account.postalNumber}</p>
            <p>Phone: {account.phone}</p>

            <div>
              {/* <Link href="/[id]/edit" as={`/${event._id}/edit`}>
                  <button>Edit</button>
                </Link> */}
            </div>
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const account = await Account.findById(params.id).lean();
  account._id = account._id.toString();

  return { props: { account } };
}

export default UserPage;
