import styled from 'styled-components';

const SNavBar = styled.div`
  background-color: ${(props) => props.background};
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;

      a {
        text-decoration: inherit;
        color: inherit;
      }
    }

    .actu-join {
      display: flex;

      li {
        margin-left: 30px;
      }

      .actu {
        margin-right: 150px;
      }
    }

    .contact-slid {
      display: flex;
      margin-left: 180px;

      .presentation {
        display: none;
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
  @media (max-width: 400px) {
    nav {
      flex-direction: column;

      ul {
        margin-top: 10px;

        li {
          font-size: 1em;
        }
      }

      .presentation {
        border: 2px transparent solid;
        background-color: transparent;
        border-radius: 15px;
        width: inherit;
        padding: 10px;
        color: ${(props) => props.text};
        font-family: 'Merriweather', serif;
        font-size: 1.1rem;
        font-weight: 700;
      }

      .pictos img:hover {
        border: 4px transparent solid;
      }

      .pictos {
        width: 100%;
      }

      .actu-join {
        flex-direction: column;
        margin-left: 0;

        li {
          margin-left: 0;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        flex-direction: column;
        margin-left: 0;

        li {
          margin-left: 20px;
        }

        .contact {
          padding-left: 0;
          margin-left: 0;
        }

        .presentation {
          display: flex;
        }
      }

      .actu:hover,
      .contact:hover,
      .join:hover {
        border: 2px transparent solid;
      }
    }
  }
`;
export default SNavBar;
