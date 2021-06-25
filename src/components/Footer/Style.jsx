import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  bottom: 0;
  left: 0;
  right: 0;
  height: 17vh;
  font-size: 0.8em;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #2c2875;

  .logo {
    width: 17%;
  }

  .logo img {
    width: 100%;
    height: 100%;
  }

  .infos {
    color: ${(props) => props.text};
    font-size: 0.9em;
    line-height: 1.5em;
  }

  .links {
    font-size: 0.9em;
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

  .date {
    color: white;
    font-size: 0.9em;
  }

  .inputAdress {
    display: none;
  }
`;

export default SFooter;
