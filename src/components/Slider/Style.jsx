import styled from 'styled-components';

const Sslider = styled.div`
  .each-slide {
    position: relative;
    height: 350px;
  }

  .each-slide > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: left;
    background-size: cover;
    height: 350px;
  }

  .each-slide .each-text {
    font-size: 1.1em;
    background-color: rgba(55, 106, 182, 0.664);
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    justify-content: center;
    color: white;
    width: 50vw;
  }
  .each-img {
    width: 100%;
  }

  .slider-text {
    text-align: justify;
    margin-left: 250px;
    margin-right: 5px;
    @media (max-width: 800px) {
      height: 20%;
      font-size: 0.9em;
      margin-left: 0px;
    }
  }
  .each-title {
    display: flex;
    text-align: justify;
    font-size: 1.1em;
    margin-left: 250px;
    @media (max-width: 800px) {
      font-size: 0.9em;
      margin-left: 0px;
    }
  }
`;

export default Sslider;
