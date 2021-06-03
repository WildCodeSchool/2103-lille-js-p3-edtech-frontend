import styled from 'styled-components';

const Sslider = styled.div`
  width: 100vw;
  padding-top: 20px;
  margin: auto;

  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: left;
    background-size: cover;
    height: 350px;
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
    display: flex;
    margin-left: 300px;
    text-align: justify;
  }

  .each-title {
    display: flex;
    font-size: 1.2em;
    margin-left: 300px;
    text-align: justify;
  }
`;

export default Sslider;
