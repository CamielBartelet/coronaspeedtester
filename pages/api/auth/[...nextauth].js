import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import sendVerificationRequest from "../../../lib/verificationmail";

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
