import Link from "next/link";
import Globalstyle from "../appBuild/style/index";
import { getSession } from "next-auth/client";

export default function Dashboard({ user }) {
  return (
    <>
      <style jsx>{Globalstyle}</style>
      <main className="container">
        <div className="wrappingCont">
          <Link href="/cms/eventorganisers">
            <div className="maincmsBtn">Event Organisers</div>
          </Link>
          <Link href="/cms/testservices">
            <div className="maincmsBtn">Test Locaties</div>
          </Link>
        </div>
        <div className="wrappingCont">
          <Link href="/cms/users">
            <div className="maincmsBtn">Gebruikers</div>
          </Link>
          <Link href="/cms/appcms">
            <div className="maincmsBtn">App CMS</div>
          </Link>
        </div>
      </main>
    </>
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
