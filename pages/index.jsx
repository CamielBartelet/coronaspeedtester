import React from "react";
import { useState } from "react";
import { getSession } from "next-auth/client";
import dbConnect from "../util/mongodb";
import User from "../models/User";
import Welcome from "../appBuild/Components/appComp/welcome";
import Steps from "../appBuild/Components/appComp/steps";
import HeadMenu from "../appBuild/Components/appComp/menu";
import Terms from "../appBuild/Components/appComp/terms";
import SignUp from "../appBuild/Components/appComp/signUp";
import Personaldata from "../appBuild/Components/appComp/persData";

const CoronaIndex = ({ accounts }) => {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  const pages = [
    {
      name: "welcome",
      pagecont: <Welcome />,
      head: <img className="renormLogo" src="/img/renormlogo.jpg" />,
      buttonNxt: "Ik ben er klaar voor!",
    },
    {
      name: "steps",
      pagecont: <Steps />,
      head: <HeadMenu page={page} onprev={setPage} />,
      buttonNxt: "Ik begrijp het, ik wil beginnen!",
    },
    {
      name: "terms",
      pagecont: <Terms />,
      head: <HeadMenu page={page} onprev={setPage} />,
      buttonNxt: "Ik accepteer de voorwaarden",
    },
    {
      name: "signup",
      pagecont: <SignUp onnext={nextPage} accounts={accounts} />,
      head: <HeadMenu page={page} onprev={setPage} />,
      buttonNxt: "",
    },
    {
      name: "persdata",
      pagecont: <Personaldata onnext={nextPage} />,
      head: <HeadMenu page={page} onprev={setPage} />,
      buttonNxt: "",
      session: true,
    },
  ];

  return (
    <>
      {/* <HomeButton /> */}
      <main className="container">
        <div className="mainApp">
          <div className="headerWrap">{pages[page].head}</div>
          <div className="mainContent">{pages[page].pagecont}</div>
          <div className="optBtn">
            {pages[page].buttonNxt != "" ? (
              <div className="passTruBtn" onClick={nextPage}>
                <div className="btnCont">{pages[page].buttonNxt}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    ctx.res.writeHead(302, { Location: "/auth/signin" });
    ctx.res.end();
    return {};
  }

  await dbConnect();

  const resultAcc = await User.find({ email: session.user.email });

  const accounts = resultAcc.map((doc) => {
    const account = JSON.parse(JSON.stringify(doc));
    return account;
  });

  return { props: { accounts: accounts } };
}

export default CoronaIndex;
