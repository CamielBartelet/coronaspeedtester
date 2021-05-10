import React from "react";
import { useState } from "react";
import { getSession, getCsrfToken } from "next-auth/client";
import dbConnect from "../util/mongodb";
import User from "../models/User";
import Event from "../models/Event";
import Welcome from "../appBuild/Components/appComp/welcome";
import Steps from "../appBuild/Components/appComp/steps";
import HeadMenu from "../appBuild/Components/appComp/menu/menu";
import Terms from "../appBuild/Components/appComp/terms";
import SignUp from "../appBuild/Components/appComp/signUp";
import Personaldata from "../appBuild/Components/appComp/persData";

const CoronaIndex = ({ csrfToken, accounts, events }) => {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  let nextEvent = null;

  if (events) nextEvent = events[0];

  const pages = [
    {
      name: "welcome",
      pagecont: <Welcome event={nextEvent} />,
      head: <HeadMenu page={page} onprev={setPage} account={accounts} />,
      buttonNxt: "Ik ben er klaar voor!",
      height: "45vh",
      btnWidth: "480px",
    },
    {
      name: "steps",
      pagecont: <Steps />,
      head: <HeadMenu page={page} onprev={setPage} account={accounts} />,
      buttonNxt: "Ik begrijp het, ik wil beginnen!",
      height: "3vh",
      btnWidth: "auto",
    },
    {
      name: "terms",
      pagecont: <Terms />,
      head: <HeadMenu page={page} onprev={setPage} account={accounts} />,
      buttonNxt: "Ik accepteer de voorwaarden",
      height: "3vh",
      btnWidth: "auto",
    },
    {
      name: "signup",
      pagecont: <SignUp accounts={accounts} csrfToken={csrfToken} />,
      head: <HeadMenu page={page} onprev={setPage} account={accounts} />,
      buttonNxt: "",
      height: "3vh",
      btnWidth: "auto",
    },
    {
      name: "persdata",
      pagecont: <Personaldata onnext={nextPage} />,
      head: <HeadMenu page={page} onprev={setPage} />,
      buttonNxt: "",
      height: "3vh",
      btnWidth: "auto",
    },
  ];

  return (
    <>
      {/* <HomeButton /> */}
      <main className="container">
        <div className="mainApp">
          <div className="headerWrap">
            <HeadMenu page={page} onprev={setPage} account={accounts} />
          </div>
          <div className="mainContent">{pages[page].pagecont}</div>
          <div className="optBtn">
            {pages[page].buttonNxt != "" ? (
              <div className="passTruBtn">
                <div
                  className="btnCont"
                  style={{ width: pages[page].btnWidth }}
                  onClick={nextPage}
                >
                  {pages[page].buttonNxt}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="yellowSpace"
            style={{ height: pages[page].height }}
          ></div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    // ctx.res.writeHead(302, { Location: "/auth/signin" });
    // ctx.res.end();
    const accounts = null;
    return { props: { accounts: accounts } };
  }

  await dbConnect();
  if (session) {
    const resultAcc = await User.find({ email: session.user.email });

    const accounts = resultAcc.map((doc) => {
      const account = JSON.parse(JSON.stringify(doc));
      return account;
    });
    return { props: { accounts: accounts } };
  }
}

export default CoronaIndex;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const csrfToken = await getCsrfToken(ctx);
  await dbConnect();

  if (!session) {
    const accounts = null;

    const result = await Event.find({});

    const events = result.map((doc) => {
      const event = doc.toObject();
      event._id = event._id.toString();
      return event;
    });
    return { props: { csrfToken, accounts: accounts, events: events } };
  }

  if (session) {
    const resultAcc = await User.find({ email: session.user.email });
    ctx.res.writeHead(302, { Location: `/${resultAcc[0]._id}` });
    ctx.res.end();
    return { props: { csrfToken, accounts: "", events: "" } };
  }
}
