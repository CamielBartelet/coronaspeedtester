import AppCompstyle from "./appCompstyle";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import SignInTemp from "./signInTemp";

const SignUp = ({ accounts, csrfToken }) => {
  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="signUpComp">
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
            <SignInTemp csrfToken={csrfToken} />
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
      </div>
    </>
  );
};

export default SignUp;
