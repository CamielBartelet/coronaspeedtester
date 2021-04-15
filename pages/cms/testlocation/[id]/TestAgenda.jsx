import { useRouter } from "next/router";
import dbConnect from "../../../../util/mongodb";
import Testlocation from "../../../../models/Testlocation";
//import FullCalendar from "../../../../appBuild/Components/appComp/fullcalendar";
import ICSReader from "../../../../appBuild/Components/appComp/ICSReader";




const TestAgenda = ({ testOrg }) => {
  console.log(testOrg);
  return (
    <>
      <div>De Agenda</div>
      <div>
        <li>{testOrg._id}</li>
        <li>{testOrg.name}</li>
        <li>{testOrg.region}</li>
        <li>{testOrg.data}</li>
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
  const ICSdata = ICSReader.data;

  return { 
    props: { testOrg: testorganisations, testOrg: ICSdata }
  };
}

export default TestAgenda;
