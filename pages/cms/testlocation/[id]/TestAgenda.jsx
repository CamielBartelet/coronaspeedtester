import { useRouter } from "next/router";
import dbConnect from "../../../../util/mongodb";
import Testlocation from "../../../../models/Testlocation";
//import FullCalendar from "../../../../appBuild/Components/appComp/fullcalendar";
import ICSReader from "../../../../appBuild/Components/appComp/ICSReader";




const TestAgenda = ({ testOrg }) => {
  console.log(testOrg);
  console.log(ICSReader.data);
  return (
    <>
      <div>De Agenda</div>
      <div>
        <li>{testOrg._id}</li>
        <li>{testOrg.name}</li>
        <li>{testOrg.region}</li>
        <div>
      {/* <FullCalendar defaultView='dayGridMonth' />
      <FullCalendar defaultView='timeGridWeek' /> */}
      <li>{ICSReader.data}</li>
       </div>
       </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const testorganisations = await Testlocation.findById(params.id).lean();
  testorganisations._id = testorganisations._id.toString();

  return { 
    props: { testOrg: testorganisations } };
}

export default TestAgenda;
