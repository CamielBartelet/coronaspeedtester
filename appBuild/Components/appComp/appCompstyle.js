import css from "styled-jsx/css";

export default css`
  .stepList {
    font-size: 0.9em;
  }
  .stepList tbody tr td:nth-child(2) {
    width: 80%;
  }

  .stepList img {
    background: #dddddd;
    padding: 9px;
    border-radius: 12px;
  }

  .appmenu {
    display: flex;
    width: 95%;
    height: 100%;
    align-items: center;
  }

  .previousSide {
    width: 63%;
    height: 100%;
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

  .eventWrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .eventTable {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .eventRow {
    background: #fff;
    width: 80%;
    min-height: 100px;
    display: flex;
    align-items: center;
    margin: 6px 0;
    cursor: pointer;
  }

  .eventRow:hover {
    background: aliceblue;
  }

  .eventImage {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    margin: 15px 20px;
  }

  .eventImage > img {
    ${"" /* flex-shrink: 0; */}
    height: 100%;
  }

  .eventName {
    width: 70%;
    padding: 0 5%;
    text-transform: capitalize;
  }

  .regionMap {
    width: 600px;
    height: 600px;
    cursor: pointer;
  }

  .inputForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .inputForm > * {
    display: flex;
    align-items: flex-end;
    min-height: 50px;
    padding: 5px 0;
  }

  .inputForm > input {
    background: #eef5fb;
    border: none;
    padding: 0 5px;
  }

  .inputForm > input:focus {
    outline: none;
  }

  .formButton {
    display: flex;
    justify-content: center;
    color: #000;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    align-items: center;
  }

  .formButtonCont {
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    background: #86e4d9;
    cursor: pointer;
    height: 60px;
    align-items: center;
  }

  .faqandMenu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 37%;
    height: 100%;
  }
`;
