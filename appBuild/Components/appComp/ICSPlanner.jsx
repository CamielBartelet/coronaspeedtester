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

    
    while(content.indexOf("DTSTART") != -1) //while there is still DTSTART in the file
     {
       var tempStart = 0;
       tempStart = file.indexOf("DTSTART");
       tempstart = tempstart + 8;
       console.log(file.charAt(tempstart));
     }
    //getData(content);
  });

//   function getData(file){
//   console.log("results:");
//   var tempfile = 0;
//   tempfile = file;
//   while(tempfile.indexOf("DTSTART") != -1) //while there is still DTSTART in the file
//    {
//      var tempStart = 0;
//      tempStart = file.indexOf("DTSTART");
//      tempstart = tempstart + 8;
//      console.log(file.charAt(tempstart));
//    }
//  }

  return (
    <div>
      Gewoon iets test:
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