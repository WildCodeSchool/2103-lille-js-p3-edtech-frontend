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

      .accordion {
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

    @media (max-width: 1240px) and (min-width: 950px) {
      li {
        font-size: 1.35em;
      }
      .actu-join {
        li {
          margin-left: 0px;
        }

        .actu {
          margin-right: 50px;
        }
      }

      .contact-slid {
        margin-left: 40px;
      }
      .pictos {
        width: 35%;
      }
    }

    @media (max-width: 950px) and (min-width: 835px) {
      li {
        font-size: 1.35em;
      }
      .actu-join {
        li {
          margin-left: -5px;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        margin-left: 0;
      }
      .pictos {
        width: 40%;
      }
    }

    @media (max-width: 835px) and (min-width: 770px) {
      li {
        font-size: 1.2em;
      }
      .actu-join {
        li {
          margin-left: -25px;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        margin-left: 0;
      }
      .pictos {
        width: 40%;
      }
    }
    @media (max-width: 770px) and (min-width: 670px) {
      ul {
        margin-left: -25px;
        margin-right: -20px;
      }
      li {
        margin-left: 0px;
        font-size: 0.9em;
      }
      .actu-join {
        li {
          margin-left: -10px;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        margin-left: 0;
      }

      .pictos {
        width: 20%;
        margin-right: 35px;

        img {
          border-radius: 35px;
          width: 30px;
        }
      }
    }

    @media (max-width: 670px) and (min-width: 470px) {
      ul {
        margin-left: 8%;
        margin-right: -20px;
      }
      li {
        margin-left: 0px;
        font-size: 0.7em;
      }
      .actu-join {
        li {
          margin-left: -90px;
        }

        .actu {
          margin-right: 0;
        }
      }

      .contact-slid {
        margin-left: -90px;
      }

      .pictos {
        width: 50%;
        margin-right: 20px;
        margin-left: -8%;

        img {
          border-radius: 35px;
          width: 30px;
        }
      }
    }

    @media (max-width: 470px) {
      flex-direction: column;

      ul {
        margin-top: 10px;

        li {
          font-size: 1em;
        }
      }

      .accordion {
        border: 2px transparent solid;
        background-color: transparent;
        cursor: pointer;
        border-radius: 15px;
        width: inherit;
        padding: 7px;
        color: ${(props) => props.text};
        font-family: 'Merriweather', serif;
        font-size: 1.08rem;
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

        .accordion {
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
