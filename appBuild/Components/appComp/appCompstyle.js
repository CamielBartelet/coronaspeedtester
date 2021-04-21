import css from "styled-jsx/css";

export default css`
  .stepComp {
    width: 70%;
    text-align: center;
    flex-direction: column;
  }

  .termsComp {
    background: #fff;
    padding: 20px;
    width: 900px;
  }

  .signUpComp {
    padding: 20px;
    background: #fff;
  }

  .stepList {
    font-size: 0.9em;
    display: flex;
  }

  .stepImg {
    height: 150px;
    display: flex;
    align-items: center;
  }

  .stepImg img {
    background: #dddddd;
    padding: 12px;
    border-radius: 12px;
  }

  .stepTxt {
    width: inherit;
    height: 220px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .stepTxt p {
    font-size: 1.2rem;
  }

  .stepNr {
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .nrBorder {
    height: 50px;
    width: 50px;
    border: 5px solid #ededed;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 700;
    color: #6a6a6a;
  }

  .step {
    background: #fff;
    height: 400px;
    width: 300px;
  }

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

  .txtOrStepper {
    text-align: center;
    height: 80px;
    font-size: 1.5rem;
  }

  .previousSide {
    width: 75px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .faqandMenu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 100%;
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

  .welcomeTxt {
    width: 480px;
    background: #fff;
    padding: 30px;
  }

  .welcomeTxt p {
    font-size: 1.4rem;
  }

  .upcomingEvent {
    padding-top: 50px;
  }

  .upcomingEvent h2 {
    padding: 20px 0;
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

  .eventHolder {
    display: flex;
    align-items: center;
  }

  .eventRow:hover {
    background: aliceblue;
  }

  .eventImage {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
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
`;
