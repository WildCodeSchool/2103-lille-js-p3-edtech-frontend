import styled from 'styled-components';

const SNavBar = styled.div`
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
      color: #2c2875;
      font-size: 1.9em;
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
        border: 4px #2c2875 solid;
      }
    }

    .actu:hover,
    .contact:hover,
    .join:hover {
      border: 2px #2c2875 solid;
    }
  }
`;
export default SNavBar;
