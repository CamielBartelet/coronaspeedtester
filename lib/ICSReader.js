const readData = (callback) => {
  var fs = require("fs");
  if (typeof window === "undefined") {
    fs.readFile(
      "/planner/TestlocatieEindhoven.ics",

      function (err, data) {
        if (err) throw callback(err);
        callback(null, data);
      }
    );
  }
};

export default readData;