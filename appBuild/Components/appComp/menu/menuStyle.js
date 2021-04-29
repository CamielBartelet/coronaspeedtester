import css from "styled-jsx/css";

export default css`
  .header {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  .appmenu {
    display: flex;
    width: 100%;
    height: 80px;
    align-self: flex-start;
    justify-content: space-between;
  }

  .previousSide {
    width: 75px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menuBtnBack {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d5e5f6;
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .menuBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d5e5f6;
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-top: 14px;
    z-index: 2;
    position: absolute;
    right: 70px;
  }

  .faqandMenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 100%;
  }

  .menuOpt {
    position: absolute;
    top: 70px;
    right: 50px;
  }

  .txtOrStepper {
    text-align: center;
    height: 100px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }
`;
