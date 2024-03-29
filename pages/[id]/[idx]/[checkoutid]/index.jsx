import dbConnect from "../../../../util/mongodb";
import User from "../../../../models/User";
import Event from "../../../../models/Event";
import { useState } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import Appointment from "../../../../models/Appointment";

const CheckoutConnect = ({ accounts, selectedEvent, selectedTest }) => {
  const [issue, setIssue] = useState("");

  const event = JSON.parse(selectedEvent);
  const test = JSON.parse(selectedTest);

  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setIssue(value);
    requestOptions.body = raw;
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    eventId: "6YaldE9lRRZMG3LB",
    ticketId: "8qX7ZMx670Og5DQj",
    user: accounts,
    issuer: issue,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const onsubmit = (e) => {
    document.getElementById("submit-button").value = "Laden...";
    document.getElementById("submit-button").disabled = true;
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      const response = await fetch("/api/tickets", requestOptions);
      const data = await response.json();
      const link = data.redirect_url;
      router.push(link);
    } catch (error) {
      console.log("Error is in making API call");
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <p>Geselecteerde event is: {event.name}</p>
        <p>Gelecteerde test locatie: {test.location}</p>
        <p>Gelecteerde test datum: {test.date}</p>
        <p>
          Gelecteerde test tijd: {test.starttime} -{test.endtime}
        </p>
      </div>
      <label>Kies uw bank: </label>
      <select
        id="issuer"
        name="issuer"
        onChange={(e) => {
          handleChange(e);
        }}
        form="carform"
      >
        <option value=""></option>
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

      <form onSubmit={onsubmit} id="carform">
        <input type="submit" id="submit-button" value="Afronden"></input>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/profile" });
    context.res.end();
    return {};
  }

  const { req, res } = context;
  const { cookies } = req;

  await dbConnect();

  const resultAcc = await User.find({ email: session.user.email });

  const accounts = resultAcc.map((doc) => {
    const account = JSON.parse(JSON.stringify(doc));
    return account;
  });

  const apptsReq = await Appointment.findOne({
    _id: context.params.checkoutid,
  });

  const resultEvent = await Event.findOne({ _id: cookies.selectedEvent });

  return {
    props: {
      accounts: accounts,
      selectedEvent: JSON.stringify(resultEvent),
      selectedTest: JSON.stringify(apptsReq),
    },
  };
}

export default CheckoutConnect;
