import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  bottom: 0;
  left: 0;
  right: 0;
  height: 17%;
  font-size: 0.9em;
  padding: 20px;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;

  .logo {
    @media (max-width: 600px) {
      width: 40%;
    }
    width: 17%;
  }

  .logo img {
    width: 100%;
    height: auto;
  }

  .infos {
    @media (max-width: 600px) {
      font-size: 0.8em;
      padding-top: 12px;
    }
    height: inherit;
    font-size: 1.1em;
    color: ${(props) => props.text};
    line-height: 1.5em;
  }

  .links {
    @media (max-width: 600px) {
      display: none;
    }
    font-size: 1.1em;
    line-height: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .links a {
    color: ${(props) => props.text};
    text-decoration: none;
  }

  .copyright {
    text-align: right;
    line-height: 1.5em;
    width: 15vw;
    color: ${(props) => props.text};
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }

  .copyright a {
    color: ${(props) => props.text};
    text-decoration: none;
    font-size: 0.9em;
  }
  .adress {
    height: auto;
  }
  .date {
    color: white;
    font-size: 0.8em;
  }

  .date_responsive {
    @media (max-width: 600px) {
      margin: auto;
      padding-top: 90px;
    }
    @media (min-width: 600px) {
      display: none;
    }
    color: white;
    font-size: 0.9em;
  }
`;

export default SFooter;
