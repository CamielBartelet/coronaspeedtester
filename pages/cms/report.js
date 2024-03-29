import React, { useState, useEffect } from "react";

const Report = ({ days }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryReport = () => {
      //(1)
      window.gapi.client
        .request({
          path: "/v4/reports:batchGet",
          root: "https://analyticsreporting.googleapis.com/",
          method: "POST",
          body: {
            reportRequests: [
              {
                viewId: "233317063", //enter your view ID here: Sessions: 218127161
                dateRanges: [
                  {
                    startDate: `${days}daysAgo`,
                    endDate: "today",
                  },
                ],
                metrics: [
                  {
                    expression: "ga:users",
                  },
                ],
                dimensions: [
                  {
                    name: "ga:date",
                  },
                ],
              },
            ],
          },
        })
        .then(displayResults, console.error.bind(console));
    };

    const displayResults = (response) => {
      //(2)
      const queryResult = response.result.reports[0].data.rows;
      const result = queryResult.map((row) => {
        const dateSting = row.dimensions[0];
        const formattedDate = `${dateSting.substring(
          0,
          4
        )}-${dateSting.substring(4, 6)}-${dateSting.substring(6, 8)}`;
        return {
          date: formattedDate,
          visits: row.metrics[0].values[0],
        };
      });
      setData(result);
    };

    //   let today = new Date().toISOString().slice(0, 10);
    //   console.log(today);

    queryReport();
  }, [days]);

  return data.map((row) => (
    <div key={row.date}>{`${row.date === "today" ? "Today" : row.date}: ${
      row.visits
    } visits`}</div> //(3)
  ));
};

export default Report;
