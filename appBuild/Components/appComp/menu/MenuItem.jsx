import * as React from "react";
import { motion } from "framer-motion";
import MenuCompstyle from "./menuStyle";
import { signIn, signOut } from "next-auth/client";
import { useRouter } from "next/router";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "flex",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, account }) => {
  const router = useRouter();
  const menuOpt = [
    {
      ico: "/icons/aanmelden.svg",
      txt: "Ingelogd met " + account?.email,
      click: () => {
        router.push("tempindex");
      },
    },
    { ico: "/icons/aanmelden.svg", txt: "Log uit", click: signOut },
    {
      ico: "/icons/aanmelden.svg",
      txt: "Log in",
      click: signIn,
    },
  ];
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <>
      <style jsx>{MenuCompstyle}</style>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={menuOpt[i].click}
      >
        <div className="icon-placeholder">
          <img src={menuOpt[i].ico} width="30px" height="35px" />
        </div>
        <div className="text-placeholder">{menuOpt[i].txt}</div>
      </motion.li>
    </>
  );
};
