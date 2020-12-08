import HomeButton from "../appBuild/Components/homecomp/Homebutton";

const NigelProto = () => {
  return (
    <>
      <HomeButton />
      <main className="container">
        <p>Hi there Nigel</p>

        <div id="shop-frame" data-url="https://shop.eventix.io/0dfd8577-4569-4b74-9c2a-88480561c115" style={{width: '400px', margin: '0 auto'}}></div>
        <script src="https://shop.eventix.io/build/integrate.js"></script>

      </main>
    </>
  );
};

export default NigelProto;
