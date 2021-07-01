import styled from 'styled-components';

const SActuTwit = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};

  h1 {
    padding: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  .ActuTwit {
    display: flex;
  }

  .twoActus-twit {
    position: relative;
    padding: 1.5rem;
    overflow-y: hidden;
    width: 30%;
  }

  .twoActus {
    line-height: 1.7;
    font-size: 1.1em;
    width: 70vw;
  }

  .twoActus h1 {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
  }

  .actu1 {
    display: flex;
    justify-content: space-around;
    background-color: #2c2875;
    margin-bottom: 10px;

    border-radius: 5px;
    border: 1px greenyellow solid;
  }

  .titleAndp {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .photo_actu {
    margin-left: 1rem;
    margin-top: 4.6rem;
    height: 10rem;
    width: 10rem;
    border-radius: 10px;
  }

  .actu2 {
    display: flex;
  }

  .twoActus a {
    text-decoration: underline;
    color: #f5f5f5;
  }

  .twit-title {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .twit-content {
    position: absolute;
    right: 25px;
    height: 90%;
    width: 90%;
    overflow-y: scroll;
    border-radius: 10px;
  }

  .actu3 {
    display: none;
    background-color: #2c2875;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
  .actu4 {
    display: none;
    background-color: #2c2875;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
  .actu5 {
    display: none;
    background-color: #2c2875;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
`;

export default SActuTwit;
