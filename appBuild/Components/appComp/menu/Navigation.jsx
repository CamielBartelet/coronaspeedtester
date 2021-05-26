import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import MenuCompstyle from "./menuStyle";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ account }) => (
  <>
    <style jsx>{MenuCompstyle}</style>
    <motion.ul variants={variants}>
      {!account ? (
        <MenuItem i={3} />
      ) : (
        <>
          {itemIds.map((i) => (
            <MenuItem i={i} key={i} account={account} />
          ))}
        </>
      )}
    </motion.ul>
  </>
);

const itemIds = [0, 1, 2];
