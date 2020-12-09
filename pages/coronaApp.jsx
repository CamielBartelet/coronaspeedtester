import HomeButton from "../appBuild/Components/homecomp/Homebutton";
import { useState } from "react";
import Welcome from "../appBuild/Components/appComp/welcome";
import Steps from "../appBuild/Components/appComp/steps";
import HeadMenu from "../appBuild/Components/appComp/menu";
import Terms from "../appBuild/Components/appComp/terms";
import SignUp from "../appBuild/Components/appComp/signUp";

const CoronaIndex = () => {
  const [page, setPage] = useState(0);

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
      pagecont: <SignUp />,
      head: <HeadMenu page={page} onprev={setPage} />,
      buttonNxt: "Creëer je account",
    },
  ];

  const nextPage = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  return (
    <>
      <HomeButton />
      <main className="container">
        <div className="mainApp">
          <div className="headerWrap">{pages[page].head}</div>
          <div className="mainContent">{pages[page].pagecont}</div>
          <div className="passTruBtn" onClick={nextPage}>
            <div className="btnCont">{pages[page].buttonNxt}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CoronaIndex;
