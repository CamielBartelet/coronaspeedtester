import css from "styled-jsx/css";

export default css.global`

  p {
    margin: 0;
    padding: 0;
  }

  td,
  th {
    border: 1px solid #fff;
    width: 10%;
    height: 40px;
  }

  th {
    border-radius: 10px;
    background: #2d7dd2;
  }

  .eventMng th:last-child, .ogsMng th:last-child {
    background: none;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background: #f9f9f9;
  }

  .mainApp {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    background: #f9f9f9;
  }

  .headerWrap {
    width: 100%;
    height: 23vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .renormLogo {
    max-width: 360px;
  }

  .mainContent {
    width: 100%;
    // height: 70%;
    padding: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
  }

  .optBtn {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .yellowSpace {
    content: "";
    width: 100%;
    height: 45vh;
    background: #FFEA6E;
    bottom: 0;
    position: absolute;
  }

  .passTruBtn {
    display: flex;
    justify-content: center;
    color: #000;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .btnCont {
    display: flex;
    justify-content: center;
    min-width: 300px;
    border-radius: 10px;
    background: #86e4d9;
    cursor: pointer;
    height: 65px;
    align-items: center;
    max-width: 220px;
  }

  .testLocDashboard {
    display: flex;
    justify-content: center;
  }

  .testLocDashboard > div {
    width: 300px;
    height: 100px;
    
  }

  .addNew,
  .viewEvent,
  .editEvent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .createNew {
    background-color: #214f4b;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .backbutton {
    width: 70px;
    padding: 20px 20px;
    background-color: #e9f4fd;
    cursor: pointer;
    position: absolute;
  }

  .wrappingCont {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 40%;
  }

  .maincmsBtn {
    cursor: pointer;
    display: flex;
    width: 40%;
    height: 200px;
    justify-content: center;
    align-items: center;
    border: 1px solid #e9f4fd;
    border-radius: 10px;
  }

  .maincmsBtn:hover {
    background-color: aliceblue;
  }

  .createNew:hover,
  .backbutton:hover {
    background-color: #77a4b1;
  }

  .ogsMng, .eventMng, .userMng {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify content: center
    align-items: center;
  }

  .table_head {
    color: #fff;
    font-weight: 700;
    white-space: nowrap;
  }

  .eventTable {
    white-space: nowrap;
  }

  td {
    justify-content: center;
  }

  .editOpt {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .editOpt a {
    width: 50%;
    padding: 6px 0;
    display: block;
    text-align: center;
    border: 1px solid #daebfb;
  }

  .editOpt a:hover {
    background-color: #daebfb;
  }

  // .toggleBox {
  //   width: 60vw;
  // }

  .filterOptions {
    display: flex;
  }

  nav {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    z-index: 2;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    background: #d5e5f6;
  }

  .menuToggle {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  nav ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }

  nav li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 30px;
    flex: 1;
  }

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .verifyrequesttxt {
  text-align: center;
  font-weight: 700;
  color: #1D8175;
  }

  .signInHold {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
