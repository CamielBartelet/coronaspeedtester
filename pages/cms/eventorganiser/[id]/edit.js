import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import OrganiserForm from "../../../../appBuild/Components/manage/newOrganiser";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditOrganiser = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: org, error } = useSWR(
    id ? `/api/organisations/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!org) return <p>Loading...</p>;

  const organisationForm = {
    name: org.name,
    region: org.region,
    email: org.email,
    phone: org.phone,
    capacity: org.capacity,
  };

  return (
    <>
      <Link href="/cms/eventorganisers">
        <div className="backbutton">Back</div>
      </Link>
      <div className="editEvent">
        <OrganiserForm
          formId="edit-organiser-form"
          eventForm={organisationForm}
          forNewEvent={false}
        />
      </div>
    </>
  );
};

export default EditOrganiser;
