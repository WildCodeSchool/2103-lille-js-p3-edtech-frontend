import styled from 'styled-components';

const SNewsletter = styled.div`
  background-color: ${(props) => props.background};
  padding-top: 30px;
  padding-bottom: 30px;
  color: ${(props) => props.text};
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-newsletter {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
  }

  .description-newsletter {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    font-size: 1.3em;
    text-align: center;
    padding: 10px;
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

export default SNewsletter;
