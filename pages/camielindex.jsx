import HomeButton from "../appBuild/Components/homecomp/Homebutton";
import useSWR from "swr";
// import "../lib/server";

const CamielProto = () => {
  const baseUrl = "/api/users";
  const users = useSWR(baseUrl).data?.Users;
  console.log(users);

  return (
    <>
      <HomeButton />
      <main className="container">
        <p>Hi there Camiel</p>
        <button
          style={{ width: "100px", height: "25px" }}
          onClick={() => {
            JSON.stringify(users, null, 2);
          }}
        >
          Show data
        </button>
      </main>
    </>
  );
};

export default CamielProto;
