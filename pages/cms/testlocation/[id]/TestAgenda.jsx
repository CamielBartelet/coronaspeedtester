import { useRouter } from "next/router";
import dbConnect from "../../../../util/mongodb";
import Testlocation from "../../../../models/Testlocation";

const TestAgenda = ({ testOrg }) => {
  return (
    <>
      <div>De Agenda</div>
      <div>
        <li>{testOrg._id}</li>
        <li>{testOrg.name}</li>
        <li>{testOrg.region}</li>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const testorganisations = await Testlocation.findById(params.id).lean();
  testorganisations._id = testorganisations._id.toString();

  return { props: { testOrg: testorganisations } };
}

export default TestAgenda;
