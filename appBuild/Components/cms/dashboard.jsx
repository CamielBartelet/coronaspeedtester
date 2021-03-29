import Link from "next/link";
import Globalstyle from "../../style/index";

const CMSDashboard = ({ user }) => {
  return (
    <>
      <style jsx>{Globalstyle}</style>
      <main className="container">
        <div>Logged in as {user.email}</div>
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
};

export default CMSDashboard;
