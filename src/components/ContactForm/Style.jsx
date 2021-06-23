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

  .accroche {
    text-align: center;
  }

  h1 {
    text-align: center;
    font-size: 45px;
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

    .active {
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

    .active:hover,
    .inactive:hover {
      border: 2px #a30808 solid;
    }

    .inactive {
      border: 2px transparent solid;
      background-color: green;
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
  }

  .RGPD {
    display: flex;
    justify-content: center;

    input {
      width: auto;
      height: auto;
    }
  }
`;
export default SContact;
