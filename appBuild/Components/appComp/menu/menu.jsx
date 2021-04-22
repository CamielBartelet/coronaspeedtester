import React, { useState, useRef, useEffect } from "react";
import MenuCompstyle from "./menuStyle";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../../../lib/use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 280px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 280px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
    },
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Voorwaarden", "Aanmelden", "Verificatie"];
}

const HeadMenu = ({ page, onprev, loggedIn, account }) => {
  const classes = useStyles();
  const steps = getSteps();
  const router = useRouter();
  const [isOpen, toggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [pageTitle, setTitle] = useState(page);
  const goBack = () => {
    onprev(page - 1);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !containerRef.current.contains(event.target))
      toggleOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const titles = {
    swipePage: "Doorloop deze stappen en je ontvangt je ticket.",
    loggedIn: "",
  };

  const tempPageIndexReset = page - 2;

  return (
    <>
      <style jsx>{MenuCompstyle}</style>
      {page === 0 ? (
        <img className="renormLogo" src="/img/renormlogo.jpg" />
      ) : (
        <div className="header">
          <div className="appmenu">
            <div className="previousSide">
              {router.pathname === "/[id]" ? (
                ""
              ) : (
                <div
                  className="menuBtnBack"
                  onClick={loggedIn == true ? () => router.back() : goBack}
                >
                  <img
                    src="/icons/arrow_back-24px.svg"
                    width="35px"
                    height="35px"
                  />
                </div>
              )}
            </div>
            <div className="faqandMenu">
              {/* <img src="/icons/apps-24px.svg" width="35px" height="35px" /> */}
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
              >
                <div className="menuBtn">
                  <img
                    src="/icons/help_outline-24px.svg"
                    width="35px"
                    height="35px"
                  />
                </div>
                <motion.div className="background" variants={sidebar} />
                <Navigation account={account} />
                <MenuToggle toggle={toggleOpen} opencheck={isOpen} />
              </motion.nav>
            </div>
          </div>
          <div className="txtOrStepper">
            {page === 1 || router.pathname === "/[id]" ? (
              <h3>{pageTitle === 1 ? titles.swipePage : ""}</h3>
            ) : (
              <div className={classes.root}>
                <Stepper
                  alternativeLabel
                  activeStep={tempPageIndexReset}
                  connector={<QontoConnector />}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeadMenu;
