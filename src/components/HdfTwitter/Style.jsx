import styled from 'styled-components';

const SActuTwit = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  padding: 15px;

  h1 {
    padding: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
  }

  .actuTwit {
    display: flex;
  }

  .actus-twit {
    position: relative;
    padding: 25px;
    overflow-y: hidden;
    width: 30%;
  }

  .actus {
    line-height: 1.7;
    font-size: 1.1em;
    width: 70vw;
  }

  h2 {
    font-size: 1.6rem;
    padding: 1rem;
    font-weight: bold;
    text-align: center;
  }

  .actu {
    justify-content: space-around;
    background-color: #2c2875;
    margin-bottom: 10px;
    border-radius: 5px;
    padding-bottom: 25px;
  }

  .imgAndp {
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      height: 10rem;
      border-radius: 8px;
    }
  }

  .actus a {
    text-decoration: underline;
    color: #f5f5f5;
  }

  .twit-content {
    position: absolute;
    right: 25px;
    height: 92%;
    width: 93%;
    overflow-y: scroll;
    border-radius: 8px;
  }
`;

export default SActuTwit;
