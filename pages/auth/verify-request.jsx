import Verify from "../../appBuild/Components/appComp/verify";
import { getCsrfToken } from "next-auth/client";

export default function SignIn({ csrfToken }) {
  return (
    <main className="container">
      <div className="mainApp">
        <Verify />
        <div className="verifyrequesttxt">
          Je account is geverifiëerd.
          <br />
          Je kunt nu dit account gebruiken voor je volgende activiteit!
          <br />
          Klik op de link in je mailbox om je persoonsgegevens aan te vullen.
        </div>
      </div>
    </main>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
