import SignUpForm from "./signUpform";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

const SignUp = ({ onnext, accounts }) => {
  // const [session, loading] = useSession();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // const accountForm = {
  //   name: "",
  //   lastname: "",
  //   postalCode: "",
  //   postalNumber: "",
  //   phone: "",
  //   bsnnumber: "",
  // };

  return (
    <>
      <div className="contTitle">
        <h2>Meld je aan op Renorm</h2>
      </div>
      <div className="contText">
        <p>
          We hebben een account nodig om het proces op lange termijn te
          versnellen voor jou.
        </p>
      </div>
      {accounts == null && (
        <>
          {/* Not signed in <br /> */}
          <button onClick={signIn}>Meld je aan</button>
        </>
      )}
      {accounts && (
        <>
          Je bent ingelogd met {accounts[0].email} <br />
          <button onClick={signOut}>Log uit</button>
          <Link href="/[id]" as={`/${accounts[0]._id}`}>
            <div>Ga naar accountpagina</div>
          </Link>
        </>
      )}
      {/* <SignUpForm
        onnext={onnext}
        formId="add-account-form"
        accountForm={accountForm}
      /> */}
    </>
  );
};

export default SignUp;
