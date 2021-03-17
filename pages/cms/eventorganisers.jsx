import Link from "next/link";
const Eventorganisers = ({}) => {
  return (
    <>
      <Link href="/apicms">
        <div className="backbutton">Back</div>
      </Link>
      <main className="container">
        <div className="ogsMng">
          <h2>Organisatie</h2>
          <table>
            <thead className="table_head">
              <tr className="eventTable">
                <th>Organisatienaam</th>
                <th>Regio</th>
                <th>Contact</th>
                <th>
                  {" "}
                  {/* <Link href="/newOrganisation"> */}
                  <div className="createNew">
                    <p>Nieuwe organisatie</p>
                  </div>
                  {/* </Link> */}
                </th>
              </tr>
            </thead>
          </table>
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

export default Eventorganisers;
