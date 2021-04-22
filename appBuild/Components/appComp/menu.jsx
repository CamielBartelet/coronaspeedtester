import React, { useEffect } from "react";
import AppCompstyle from "./appCompstyle";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";

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

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return "Select campaign settings...";
//     case 1:
//       return "What is an ad group anyways?";
//     case 2:
//       return "This is the bit I really care about!";
//     default:
//       return "Unknown step";
//   }
// }

const HeadMenu = ({ page, onprev, loggedIn }) => {
  const classes = useStyles();
  const steps = getSteps();
  const router = useRouter();
  const goBack = () => {
    onprev(page - 1);
  };

  const tempPageIndexReset = page - 2;

  return (
    <>
      <style jsx>{AppCompstyle}</style>
      {page === 0 ? (
        <img className="renormLogo" src="/img/renormlogo.jpg" />
      ) : (
        <div className="header">
          <div className="appmenu">
            <div className="previousSide">
              <div
                className="menuBtn"
                onClick={loggedIn == true ? () => router.back() : goBack}
              >
                <img
                  src="/icons/arrow_back-24px.svg"
                  width="35px"
                  height="35px"
                />
              </div>
            </div>
            <div className="faqandMenu">
              <div className="menuBtn">
                <img
                  src="/icons/help_outline-24px.svg"
                  width="35px"
                  height="35px"
                />
              </div>
              <div className="menuBtn">
                <img src="/icons/apps-24px.svg" width="35px" height="35px" />
              </div>
            </div>
          </div>
          <div className="txtOrStepper">
            {page === 1 ? (
              <h3>Doorloop deze stappen en je ontvangt je ticket.</h3>
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
