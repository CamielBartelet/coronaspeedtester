import AppCompstyle from "./appCompstyle";

const HeadMenu = ({ page, onprev }) => {
  const goBack = () => onprev(page - 1);
  return (
    <>
      <style jsx>{AppCompstyle}</style>
      <div className="appmenu">
        <div className="previousSide">
          <div className="menuBtn" onClick={goBack}>
            <img src="/icons/arrow_back-24px.svg" width="35px" height="35px" />
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
    </>
  );
};

export default HeadMenu;