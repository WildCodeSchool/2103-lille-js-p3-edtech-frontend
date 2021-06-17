import styled from 'styled-components';

const SContact = styled.div`
  background-color: #2c2875;
  color: #f5f5f5;
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
    }
  }

  h1 {
    text-align: center;
    font-size: 1.9em;
    font-weight: bold;
    margin-bottom: 30px;
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

    button {
      border: 2px transparent solid;
      cursor: pointer;
      background-color: red;
      height: 45px;
      width: 15%;
      border-radius: 17px;
      margin: 10px;
      font-size: 1.2em;
      font-weight: bold;
      color: #f5f5f5;
      @media (max-width: 600px) {
        font-size: 0.5em;
      }
    }

    button:hover {
      border: 2px #a30808 solid;
    }
  }
`;
export default SContact;
