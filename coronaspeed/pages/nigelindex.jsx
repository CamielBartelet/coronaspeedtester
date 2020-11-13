import HomeButton from "../Homebutton";
import Styling from "appBuild/nigelproto/nigelprot";

const NigelProto = () => {
  return (
    <>
      <style jsx>{Styling}</style>
      <HomeButton />
      <main className="container">
        <p>Hi there Nigel</p>
      </main>
    </>
  );
};

export default NigelProto;
