import Verify from "../../appBuild/Components/appComp/verify";
import { getCsrfToken } from "next-auth/client";

export default function SignIn({ csrfToken }) {
  return (
    <main className="container">
      <div className="mainApp">
        <Verify />
        <div>Check je e-mail</div>
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
