import HomeButton from "../appBuild/Components/homecomp/Homebutton";
import Welcome from "../appBuild/Components/appComp/welcome";

const CoronaIndex = () => {
  return (
    <>
      <HomeButton />
      <main className="container">
        <div className="mainApp">
          <div className="headerWrap">
            <img src="/img/renormlogo.jpg" />
          </div>
          <div className="mainContent">
            <Welcome />
          </div>
          <div className="passTruBtn">Ik ben er klaar voor!</div>
        </div>
      </main>
    </>
  );
};

export default CoronaIndex;
