import styled from 'styled-components';

const SMap = styled.div`
  background-color: ${(props) => props.background};
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: ${(props) => props.text};
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 5px;
  }

  .title-map {
    font-size: 2.8rem;
    font-weight: bold;
    text-align: center;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
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
    height: auto;
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
    padding: 10px 50px;
  }
`;

export default SMap;
