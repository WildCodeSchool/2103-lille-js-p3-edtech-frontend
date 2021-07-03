import styled from 'styled-components';

const SMap = styled.div`
  background-color: ${(props) => props.background};
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: ${(props) => props.text};
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-map {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    .description-map {
      font-size: 1.1em;
      margin: auto;
      text-align: center;
      padding: 10px;
    }
    img {
      max-width: 25%;
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    justify-self: end;
    width: auto;
    height: 5vh;
  }

  button {
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.text_button};
    cursor: pointer;
    font-size: 1.2em;
    border: 2px transparent solid;
    background-color: ${(props) => props.background_button};
    height: 100%;
    width: 100%;
    border-radius: 17px;

    @media (max-width: 600px) {
      font-size: 0.5em;
    }
  }
`;

export default SMap;
