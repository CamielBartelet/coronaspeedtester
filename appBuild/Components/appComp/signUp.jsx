import SignUpForm from "./signUpform";
import { signIn, signOut, useSession } from "next-auth/client";

const SignUp = ({ onnext }) => {
  // const [session, loading] = useSession();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  const accountForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    postalCode: "",
    postalNumber: "",
    phone: "",
    bsnnumber: "",
  };

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
      {/* {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )} */}
      <SignUpForm
        onnext={onnext}
        formId="add-account-form"
        accountForm={accountForm}
      />
    </>
  );
};
export default SignUp;
