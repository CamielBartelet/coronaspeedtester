import Link from "next/link";
// import dbConnect from "../util/mongodb";
// import Event from "../models/Event";
// import Account from "../models/accounts";
import Globalstyle from "../appBuild/style/index";

const APIIndex = () => {
  return (
    <>
      <style jsx>{Globalstyle}</style>
      <main className="container">
        <div className="wrappingCont">
          <Link href="/cms/eventorganisers">
            <div className="maincmsBtn">Event Organisers</div>
          </Link>
          <Link href="/cms/testservices">
            <div className="maincmsBtn">Test Locaties</div>
          </Link>
        </div>
        <div className="wrappingCont">
          <Link href="/cms/users">
            <div className="maincmsBtn">Gebruikers</div>
          </Link>
          <Link href="/cms/appcms">
            <div className="maincmsBtn">App CMS</div>
          </Link>
        </div>
      </main>
    </>
  );
};

// export async function getServerSideProps() {
//   await dbConnect();

//   /* find all the data in our database */
//   const result = await Event.find({});
//   const events = result.map((doc) => {
//     const event = doc.toObject();
//     event._id = event._id.toString();
//     return event;
//   });

//   const resultAcc = await Account.find({});
//   const accounts = resultAcc.map((doc) => {
//     const account = doc.toObject();
//     account._id = account._id.toString();
//     return account;
//   });

//   return { props: { events: events, accounts: accounts } };
// }

export default APIIndex;
