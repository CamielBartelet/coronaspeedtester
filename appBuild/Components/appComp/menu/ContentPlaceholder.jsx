import * as React from "react";
import { motion } from "framer-motion";

const faqText = [
  {
    txt: "De testuitslag is 40 uur geldig. Dus je moet je binnen 40 uur voor de aanvang van de activiteit of het evenement laten testen. Om het risico zo klein mogelijk te houden tijdens de pilots raden wij aan om zo kort mogelijk voor aanvang van de activiteit/het evenement je te laten testen.",
  },
  { txt: "Via deze website." },
  {
    txt: "Je kunt op dit moment je afspraak niet wijzigen. Kan je toch niet naar je afspraak komen? Annuleer deze dan in de afspraakbevestiging in je e-mail en plan een nieuwe afspraak in.",
  },
  {
    txt: "Nee, het is niet toegestaan om met meerdere personen tegelijk te komen. De afspraak geldt voor 1 persoon. Voor elke persoon moet een aparte afspraak gemaakt worden.",
  },
];

export const ContentPlaceholder = ({ id }) => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.9 }, open: { scale: 0.98 } }}
      transition={{ duration: 0.8 }}
      className="content-placeholder"
    >
      {faqText[id.id].txt}
    </motion.div>
  );
};
