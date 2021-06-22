import Link from "next/link";

const TestManager = ({ testId }) => {
  return (
    <>
      <Link
        href="../../../cms/testlocation/[id]/edit"
        as={`../../../cms/testlocation/${testId}/edit`}
      >
        <div className="testmenuopts">Gegevens</div>
      </Link>
      <Link
        href="../../../cms/testlocation/[id]/appointmentDash"
        as={`../../../cms/testlocation/${testId}/appointmentDash`}
      >
        <div className="testmenuopts">Agenda</div>
      </Link>
    </>
  );
};

export default TestManager;
