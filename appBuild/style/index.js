import css from "styled-jsx/css";

export default css.global`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .addNew,
  .viewEvent,
  .editEvent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .createNew {
    padding: 20px 30px;
    background-color: #e9f4fd;
    cursor: pointer;
  }

  .backbutton {
    width: 70px;
    padding: 20px 20px;
    background-color: #e9f4fd;
    cursor: pointer;
  }

  .createNew:hover,
  .backbutton:hover {
    background-color: #dee8f1;
  }

  // .toggleBox {
  //   width: 60vw;
  // }

  .filterOptions {
    display: flex;
  }
`;
