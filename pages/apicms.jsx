import { getSession, useSession } from "next-auth/client";
import useSWR from "swr";
import dynamic from "next/dynamic";
import CMSDashboard from "../appBuild/Components/cms/dashboard";

const UnauthenticatedComponent = dynamic(() =>
  import("../appBuild/Components/login/unauthenticated")
);

export default function Dashboard({ user }) {
  const isAdmin = useSWR(`../../api/isAdmin`).data?.hasRole;
  const [loading] = useSession();
  console.log(user.email);

  if (typeof window !== "undefined" && loading) return <p>Loading...</p>;

  return isAdmin != true ? (
    <UnauthenticatedComponent />
  ) : (
    <CMSDashboard user={user} />
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    ctx.res.writeHead(302, { Location: "/profile" });
    ctx.res.end();
    return {};
  }

  return {
    props: {
      user: session.user,
    },
  };
}
