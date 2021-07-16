import styled from 'styled-components';

const SContact = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  padding: 40px;

  .container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    padding: 40px;
    @media (max-width: 600px) {
      flex-direction: column;
      align-content: center;
      width: inherit;
      margin-top: 15px;
      padding: 0;
    }
  }

  .catchPhrase {
    text-align: center;
  }

  h1 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 30px;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  p {
    padding: 8px;
  }

  .firstBloc {
    width: 40%;
  }

  input {
    font-size: 0.9em;
    border-radius: 5px;
    height: 35px;
    width: 100%;
    margin-bottom: 10px;
  }

  .secondBloc {
    width: 40%;
  }

  textarea {
    font-size: 0.9em;
    padding: 5px;
    width: 100%;
    height: 210px;
  }

  .button {
    display: flex;
    justify-content: center;

    .active {
      border: 2px transparent solid;
      cursor: pointer;
      background-color: ${(props) => props.background_button};
      color: ${(props) => props.text_button};
      border-radius: 17px;
      padding: 10px 50px;
      margin: 10px;
      font-size: 1.2em;
      font-weight: bold;
    }

    .active:hover {
      border: 2px ${(props) => props.background_button_hover} solid;
    }

    .inactive {
      border: 2px transparent solid;
      background-color: ${(props) => props.background_button_inactive};
      border-radius: 17px;
      margin: 10px;
      font-size: 1.2em;
      font-weight: bold;
      color: ${(props) => props.text_button_inactive};
    }
  }

  .RGPD {
    display: flex;
    justify-content: center;
    text-align: center;

    input {
      width: 15px;
      height: 30px;
    }
  }

  @media (max-width: 600px) {
    .firstBloc,
    .secondBloc {
      width: inherit;
    }
  }

  @media (max-width: 450px) {
    .container {
      width: inherit;
      margin-top: 15px;
      padding: 0;
    }

    .firstBloc,
    .secondBloc {
      width: inherit;
    }

    input,
    textarea {
      padding: 5px;
      border-radius: 20px;
    }

    .button .active,
    .button .inactive {
      font-size: 1.2em;
      padding: 10px 70px;
    }
  }
`;
export default SContact;
