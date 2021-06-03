import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";

const Accordion = ({ i, expanded, setExpanded, conText }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
      className="faqheader"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#d5e5f6" : "#ffffff" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{height: "50px"}}
      >{conText}</motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder id={i}/>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const Faq = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(0);

  return accordionIds.map((i) => (
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} conText={i.txt} />
  ));
};

const accordionIds = [{id: "0", txt: "Hoelang van tevoren moet ik me laten testen?"}, {id: "1", txt: "Hoe kan ik een afspraak maken om mij te laten testen?"}, {id: "2", txt: "Kan ik mijn afspraak wijzigen of annuleren?"}, {id: "3", txt: "Kan ik voor meer personen tegelijk een afspraak maken?"}];
