import { google } from "googleapis";

let auth;
const googleEnvs = {
  credentials: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
};

console.log(googleEnvs);

export default async (_, res) => {
  auth = new google.auth.GoogleAuth(googleEnvs);

  const analytics = google.analytics({
    auth,
    version: "v3",
  });
  const startDate = "2020-11-17";

  // const startDate = req.query.startDate;
  const response = await analytics.data.ga.get({
    "end-date": "today",
    ids: "ga:186371021",
    metrics: "ga:pageviews",
    "start-date": startDate,
  });

  return res.status(200).json({
    pageViews: response.data.rows[0][0],
  });
};
