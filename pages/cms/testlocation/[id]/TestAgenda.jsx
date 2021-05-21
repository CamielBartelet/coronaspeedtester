import { useRouter } from "next/router";
import dbConnect from "../../../../util/mongodb";
import Testlocation from "../../../../models/Testlocation";
//import FullCalendar from "../../../../appBuild/Components/appComp/fullcalendar";
//import ICSReader from "../../../../lib/ICSReader";
import readData from "../../../../lib/ICSReader";
import ICSPlanner from "../../../../appBuild/Components/appComp/ICSPlanner";

const TestAgenda = ({ testOrg }) => {
  console.log(testOrg);
  return (
    <>
      <div>De Agenda</div>
      <div>
        <li>{testOrg._id}</li>
        <li>{testOrg.name}</li>
        <li>{testOrg.region}</li>
        {/* <li>{testOrg.data}</li> */}
        <ICSPlanner readData={readData} />
        <div>
          {/* <FullCalendar defaultView='dayGridMonth' />
      <FullCalendar defaultView='timeGridWeek' /> */}
        </div>
      </div>
    </>
  );
};

// const ICS = ({someICS}) =>  {
//   console.log(someICS.data);
//   return (
//     <li>{someICS.data}</li>
//   );
// };

export async function getServerSideProps({ params }) {
  await dbConnect();

  const testorganisations = await Testlocation.findById(params.id).lean();
  testorganisations._id = testorganisations._id.toString();
  //const ICSdata =  await ICSReader.data;
  //JSON.stringify(ICSdata);

  return {
    props: { testOrg: testorganisations },
  };
}

export default TestAgenda;
