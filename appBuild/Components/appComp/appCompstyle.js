import css from "styled-jsx/css";

export default css`
  .stepList {
    font-size: 0.9em;
  }
  .stepList tbody tr td:nth-child(2) {
    width: 80%;
  }

  .appmenu {
    display: flex;
    width: 90%;
    height: 100%;
    align-items: center;
  }

  .previousSide {
    width: 63%;
    height: 50%;
    display: flex;
    align-items: center;
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
  }

  .faqandMenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 37%;
    height: 50%;
  }
`;
