import styled from 'styled-components';

const SNavBar = styled.div`
  background-color: ${(props) => props.background};
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      margin-left: 30px;
      list-style: none;
      display: flex;
      width: 50%;
      justify-content: space-between;

      a {
        text-decoration: inherit;
        color: inherit;
      }
    }

    li {
      border: 2px transparent solid;
      border-radius: 15px;
      width: 150px;
      padding: 10px;
      color: ${(props) => props.text};
      font-size: 1.5em;
      font-weight: 900;
      text-align: center;
    }

    .pictos {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 25%;

      img {
        border: 4px transparent solid;
        border-radius: 35px;
        width: 50px;
        margin: 10px;
      }

      img:hover {
        border: 4px ${(props) => props.text} solid;
      }
    }

    .actu:hover,
    .contact:hover,
    .join:hover {
      border: 2px ${(props) => props.text} solid;
    }
  }
`;
export default SNavBar;
