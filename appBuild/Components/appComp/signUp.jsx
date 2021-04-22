import SignUpForm from "./signUpform";
import AppCompstyle from "./appCompstyle";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

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
            {/* Not signed in <br /> */}
            {/* <button onClick={signIn}>Meld je aan</button> */}
            <form method="post" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <label>
                Email address
                <input type="email" id="email" name="email" />
              </label>
              <button type="submit">Log in met Email</button>
            </form>
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

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
