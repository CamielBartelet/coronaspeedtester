import css from "styled-jsx/css";
import '~@fullcalendar/core/main.css';
import '~@fullcalendar/daygrid/main.css';
import '~@fullcalendar/timegrid/main.css';

export default css.global`
  body {
    margin: 0;
    // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    //   "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    //   "Helvetica Neue", sans-serif;
    font-family: "Poppins";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }

  .mainApp {
    display: flex;
    flex-direction: column;
    width: 360px;
    height: auto;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
  }

  .headerWrap {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .renormLogo {
    width: 90%;
  }

  .mainContent {
    width: 95%;
    height: 70%;
    padding: 10px;
    background: #fff;
  }

  .optBtn {
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .passTruBtn {
    display: flex;
    justify-content: center;
    color: #000;
    width: 95%;
    height: 100%;
    align-items: center;
  }

  .btnCont {
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    background: #86e4d9;
    cursor: pointer;
    height: 65px;
    align-items: center;
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
`;
