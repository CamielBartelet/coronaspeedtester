import HomeButton from "../Homebutton";
import Styling from "appBuild/camielproto/camielprot";

const CamielProto = () => {
  return (
    <>
      <style jsx>{Styling}</style>
      <HomeButton />
      <main className="container">
        <p>Hi there Camiel</p>
      </main>
    </>
  );
};

export default CamielProto;
