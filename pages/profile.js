import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";

const UnauthenticatedComponent = dynamic(() =>
  import("../appBuild/Components/login/unauthenticated")
);
const AuthenticatedComponent = dynamic(() =>
  import("../appBuild/Components/login/authenticated")
);

export default function Profile() {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return <p>Loading...</p>;

  if (!session) return <UnauthenticatedComponent />;

  return <AuthenticatedComponent user={session.user} />;
}
