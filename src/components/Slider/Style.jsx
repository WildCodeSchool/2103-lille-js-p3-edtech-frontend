import styled from 'styled-components';

const Sslider = styled.div`
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: left;
    background-size: cover;
    height: 500px;
  }

  .each-slide span {
    padding: 20px;
    font-size: 1.1em;
    background-color: rgba(55, 106, 182, 0.664);
    text-align: center;
    border-radius: 5px;
    width: 50%;
    height: 100%;
  }
  .each-img {
    height: 75vh;
    width: 100%;
  }

  .each-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    justify-content: center;
    color: white;
  }

  .slider-text {
    text-align: justify;
    margin-left: 300px;
    @media (max-width: 700px) {
      height: 20%;
      font-size: 0.9em;
      margin-left: 0px;
    }
  }

  .each-title {
    display: flex;
    text-align: justify;
    font-size: 1.1em;
    margin-left: 300px;
    @media (max-width: 700px) {
      font-size: 0.9em;
      margin-left: 0px;
    }
  }
`;

export default Sslider;
