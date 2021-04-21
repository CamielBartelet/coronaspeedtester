import readData from "../../../lib/icsreader";
import { useState } from "react";

const ICS = ({ cont }) => {
  const [readable, setICSdata] = useState({});
  setTimeout(function () {
    console.log(readable);
  }, 3000);

  readData(function (err, content) {
    setICSdata(content);
    console.log(content + "gotit");
  });

  return (
    <div>
      Gewoon iets:
      <br />
    </div>
  );
};

// export async function getServerSideProps() {
//   var fs = require("fs");
//   var content;
//   fs.readFile(
//     "public/planner/TestlocatieEindhoven.ics",
//     "utf8",
//     function (err, data) {
//       if (err) throw callback(err);
//       content = data;
//     }
//   );

//   return { props: { cont: content } };
// }

export default ICS;