import dbConnect from "../util/mongodb";
import User from "../models/User";
import { useState } from "react";
import { signIn, signOut, getSession } from "next-auth/client";

const kopeling = () => {
    const [issue, setIssue] = useState("");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"eventId":"6YaldE9lRRZMG3LB","ticketId":"8qX7ZMx670Og5DQj","user": accounts, "issuer": issue });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch("http://localhost:3000/api/tickets", requestOptions);
    const data = await response.json();
    const link = data.redirect_url;
    return (
        <div>
            <label>Choose a issuer:</label>
            <select id="issuer" name="issuer" form="carform">
                <option value="ABNANL2A">ABN</option>
                <option value="ASNBNL21">ASN</option>
                <option value="INGBNL2A">ING</option>
                <option value="RABONL2U">Rabobank</option>
                <option value="SNSBNL2A">SNS</option>
                <option value="RBRBNL21">SNS Regio</option>
                <option value="TRIONL2U">Triodos</option>
                <option value="FVLBNL22">Van Lanschot</option>
                <option value="KNABNL2H">Knab</option>
                <option value="BUNQNL2A">Bunq</option>
                <option value="MOYONL21">Moneyou</option>
                <option value="HANDNL2A">Handelsbanken</option>
                <option value="REVOLT21">Revolut</option>
            </select>

            <form onsubmit="callAPI()" id="carform">
                <input type="submit"></input>
            </form>
        </div>
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

    return {
      props: {
        link,
      },
    }
  }


export default kopeling;
