import { signIn, signOut, getSession } from "next-auth/client";
import dbConnect from "../util/mongodb";
import User from "../models/User";
import mongoose from "mongoose";
// import Event from "../models/Event";
import Link from "next/link";

export default function Page({ accounts }) {
  return (
    <>
      {!accounts && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {accounts && (
        <>
          Signed in as {accounts[0].email} <br />
          <button onClick={signOut}>Sign out</button>
          <Link href="/[id]" as={`/${accounts[0]._id}`}>
            <div>Go to account</div>
          </Link>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    ctx.res.writeHead(302, { Location: "/profile" });
    ctx.res.end();
    return {};
  }

  await dbConnect();

  const resultAcc = await User.find({ email: session.user.email });
  // const resultAcc = await Event.find();

  const accounts = resultAcc.map((doc) => {
    const account = JSON.parse(JSON.stringify(doc));
    return account;
  });

  return { props: { accounts: accounts } };
}
