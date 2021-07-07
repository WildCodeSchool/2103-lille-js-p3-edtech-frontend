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
    position: relative;
  }

  .actus {
    line-height: 1.7;
    font-size: 1.1rem;
    width: 66%;
    margin: 10px;
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
    justify-content: space-between;
    align-items: center;

    img {
      margin: 30px 30px 0px 0px;
      height: 10rem;
      border-radius: 8px;
    }

    p {
      margin: 30px 30px 0px 30px;
    }
  }

  .actus a {
    text-decoration: underline;
    color: #f5f5f5;
  }

  .twit-content {
    position: absolute;
    right: 1%;
    top: 0.8rem;
    height: 96%;
    width: 30%;
    overflow-y: scroll;
    border-radius: 8px;
  }

  @media (max-width: 950px) {
    .imgAndp {
      display: flex;
      flex-direction: column;

      img {
        margin: 15px;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 0;

    .actuTwit {
      width: inherit;
    }
    .actus {
      padding: 10px;
      width: inherit;
      font-size: 0.7rem;
    }

    .imgAndp {
      display: flex;
      flex-direction: column;

      img {
        margin: 15px;
      }
    }

    .twit-content {
      display: none;
    }
  }
`;

export default SActuTwit;
