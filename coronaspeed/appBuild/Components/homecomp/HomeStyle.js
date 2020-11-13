import css from "styled-jsx/css";

export default css`
  .homeButton {
    padding: 20px;
    position: absolute;
    cursor: pointer;
  }

  .homeButton a {
    padding: 20px;
    text-decoration: none;
  }

  .homeButton:hover {
    background-color: aliceblue;
  }

  .list {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .list li {
    padding: 20px;
    cursor: pointer;
  }

  .list li a {
    text-decoration: none;
    padding: 20px;
  }

  .list li:hover {
    background-color: aliceblue;
  }

  .projectTitle {
    display: flex;
    justify-content: center;
  }
`;
