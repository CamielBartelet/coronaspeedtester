import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import sendVerificationRequest from "../../../lib/verificationmail";
// import { User } from "../../../models/User";
import Adapters from "next-auth/adapters";

import Models from "../../../models";

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.NEXTAUTH_EMAILFROM,
      sendVerificationRequest,
    }),
  ],
  database: process.env.MONGODB_URI,
  // models: {
  //   user: User,
  // },
  // adapter: Adapters.TypeORM.Adapter(
  //   // The first argument should be a database connection string or TypeORM config object
  //   process.env.MONGODB_URI,
  //   // The second argument can be used to pass custom models and schemas
  //   {
  //     models: {
  //       User: Models.User,
  //     },
  //   }
  // ),
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    redirect: async (url, _) => {
      if (url === "/api/auth/signin") {
        return Promise.resolve("/profile");
      }
      return Promise.resolve("/");
    },
  },
};
export default (req, res) => NextAuth(req, res, options);
