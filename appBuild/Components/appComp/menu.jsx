import AppCompstyle from "./appCompstyle";
import { useRouter } from "next/router";

const HeadMenu = ({ page, onprev, loggedIn }) => {
  const router = useRouter();
  const goBack = () => onprev(page - 1);

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
              <div>Hier komt een stepper</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeadMenu;
