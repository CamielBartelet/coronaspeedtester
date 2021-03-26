import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import TestlocationForm from "../../../../appBuild/Components/camielproto/newTestlocation";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditTestlocation = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: testloc, error } = useSWR(
    id ? `/api/testlocations/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!testloc) return <p>Loading...</p>;

  const testlocationForm = {
    name: testloc.name,
    region: testloc.region,
    email: testloc.email,
    phone: testloc.phone,
    capacity: testloc.capacity,
  };

  return (
    <>
      <Link href="/cms/testservices">
        <div className="backbutton">Back</div>
      </Link>
      <div className="editEvent">
        <TestlocationForm
          formId="edit-testlocation-form"
          eventForm={testlocationForm}
          forNewEvent={false}
        />
      </div>
    </>
  );
};

export default EditTestlocation;
