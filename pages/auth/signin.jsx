import { getCsrfToken } from "next-auth/client";
import SignInTemp from "../../appBuild/Components/appComp/signInTemp";

export default function SignIn({ csrfToken }) {
  return (
    <div className="signInHold">
      <SignInTemp csrfToken={csrfToken} />
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
