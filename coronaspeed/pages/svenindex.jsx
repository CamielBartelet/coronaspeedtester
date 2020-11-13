import HomeButton from "../Homebutton";
import Styling from "appBuild/svenproto/svenprot";

const SvenProto = () => {
  return (
    <>
      <style jsx>{Styling}</style>
      <HomeButton />
      <main className="container">
        <p>Hi there Sven</p>
      </main>
    </>
  );
};

export default SvenProto;
