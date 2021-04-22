import css from "styled-jsx/css";

export default css`
  .stepComp {
    width: 70%;
    text-align: center;
    flex-direction: column;
    position: relative;
    z-index: 0;
  }

  .termsComp {
    background: #fff;
    padding: 20px;
    width: 700px;
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
    font-size: 1.1rem;
  }

  .contText p {
    font-size: 1.1rem;
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

  .signupmail {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }

  .signupmail p {
    font-weight: 550;
    font-size: 1.3rem;
    padding: 10px 0;
  }

  .signupmail input {
    height: 65px;
    border: none;
    background: #eef5fb;
    border-radius: 10px;
    color: #546573;
    font-style: italic;
    font-size: 0.95rem;
    padding: 10px;
  }

  .signupmail input:focus,
  .signbtnCont:focus {
    outline: none;
  }

  .signupbtn {
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
  }

  .signbtnCont {
    display: flex;
    justify-content: center;
    min-width: 300px;
    border-radius: 10px;
    background: #86e4d9;
    cursor: pointer;
    height: 65px;
    align-items: center;
    max-width: 220px;
    font-family: "Poppins";
    border: none;
    font-size: 1rem;
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
