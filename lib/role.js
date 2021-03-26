import { getSession } from "next-auth/client"; // https://next-auth.js.org/tutorials/securing-pages-and-api-routes#securing-api-routes

const adminEmails = [
  "camielbartelet1@gmail.com",
  "camielbartelet@gmail.com",
  "lars.vanerp@student.fontys.nl",
  "a.berkers@student.fontys.nl",
];

export const getSessionWhenAdmin = async (req) => {
  const session = await getSession({ req });
  return !session || !adminEmails.includes(session.user.email)
    ? undefined
    : session;
};
