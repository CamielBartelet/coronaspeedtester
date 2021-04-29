import dbConnect from "../util/mongodb";
import User from "../models/User";
import { signIn, signOut, getSession } from "next-auth/client";

function Checkout({ link }) {
    return (
        <h1>Klik <a href={link}>hier</a> om te betalen</h1>
    )
  }

export async function getServerSideProps(context) {

    const session = await getSession(context);
    if (!session) {
        context.res.writeHead(302, { Location: "/profile" });
        context.res.end();
      return {};
    }

    await dbConnect();

    const resultAcc = await User.find({ email: session.user.email });

    const accounts = resultAcc.map((doc) => {
      const account = JSON.parse(JSON.stringify(doc));
      return account;
    });

    console.log(accounts)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"eventId":"6YaldE9lRRZMG3LB","ticketId":"8qX7ZMx670Og5DQj","user": accounts});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch("http://localhost:3000/api/tickets", requestOptions);
    const data = await response.json();
    const link = data.redirect_url;


    return {
      props: {
        link,
      },
    }
  }


export default Checkout
