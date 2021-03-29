import Link from "next/link";

const TestManager = ({ testId }) => {
  return (
    <>
      <Link
        href="../../../cms/testlocation/[id]/edit"
        as={`../../../cms/testlocation/${testId}/edit`}
      >
        <div>Gegevens</div>
      </Link>
      <Link
        href="../../../cms/testlocation/[id]/TestAgenda"
        as={`../../../cms/testlocation/${testId}/TestAgenda`}
      >
        <div>Agenda</div>
      </Link>
    </>
  );
};

export default TestManager;
