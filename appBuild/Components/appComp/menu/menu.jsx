import React, { useState, useRef, useEffect } from "react";
import MenuCompstyle from "./menuStyle";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
// import Check from "@material-ui/icons/Check";
import { Faq } from "./faq.tsx";
import StepConnector from "@material-ui/core/StepConnector";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../../../lib/use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

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

const menuBar = {
  open: (height = 1000) => ({
    maxHeight: "100%",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    maxHeight: "80px",
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 13,
    left: "calc(-50% + 6px)",
    right: "calc(50% + 6px)",
  },
  active: {
    "& $line": {
      borderColor: "#34D1BF",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#34D1BF",
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
    height: 30,
    alignItems: "center",
  },
  active: {
    width: 30,
    height: 30,
    border: "3px solid #34D1BF",
    borderRadius: "50%",
    color: "#784af4",
    position: "relative",
    zIndex: "2",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "#EDEDED",
  },
  completed: {
    width: "30px",
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#34D1BF",
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
        <div className={classes.completed} />
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
  const [modalState, setModal] = useState(false);
  const containerRef = useRef({ width: 0, height: 0 });
  const { height } = useDimensions(containerRef);
  const [pageTitle, setTitle] = useState(page);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const goBack = () => {
    onprev(page - 1);
  };

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handleClickOutside = (event) => {
    if (
      isOpen &&
      containerRef.current &&
      !containerRef.current.contains(event.target)
    )
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
          <Dialog
            fullScreen={fullScreen}
            open={modalState}
            onClose={handleModalClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Veelgestelde vragen"}
            </DialogTitle>
            <DialogContent style={{ overflow: "hidden", width: "100%" }}>
              <DialogContentText>
                <div className="example-container">
                  <Faq />
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose} color="primary">
                Lees meer
              </Button>
              <Button onClick={handleModalClose} color="primary">
                Terug
              </Button>
            </DialogActions>
          </Dialog>
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
                variants={menuBar}
              >
                <div className="menuBtn" onClick={handleModalOpen}>
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
            {page === 1 ||
            router.pathname === "/[id]" ||
            router.pathname === "/[id]/[idx]" ||
            router.pathname === "/[id]/settings" ||
            router.pathname === "/[id]/overview" ? (
              <h3>{page === 1 ? titles.swipePage : ""}</h3>
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
