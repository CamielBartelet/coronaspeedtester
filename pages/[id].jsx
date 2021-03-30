import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/client";
import UserForm from "../appBuild/Components/appComp/userFormat";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const AccountPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: account, error } = useSWR(
    id ? `/api/accounts/${id}` : null,
    fetcher
  );

  console.log(id, account?.email + "hi");

  if (error) return <p>Failed to load</p>;
  if (!account) return <p>Loading...</p>;

  const accountForm = {
    email: account.email,
    emailVerified: account.emailVerified,
    createdAt: account.createdAt,
    updatedAt: account.updatedAt,
    phone: "",
  };

  return (
    <>
      {!account && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {account && (
        <>
          Signed in as {account.email} <br />
          <button onClick={signOut}>Sign out</button>
          <UserForm
            formId="add-persdata-form"
            accountForm={accountForm}
            forNewAccount={false}
          />
        </>
      )}
    </>
  );
};

export default AccountPage;
