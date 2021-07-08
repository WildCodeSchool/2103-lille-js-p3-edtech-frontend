import styled from 'styled-components';

const Sslider = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
  .each-slide {
    position: relative;
    height: 50vh;
  }

  .each-slide > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: left;
    background-size: cover;
    height: 50vh;
  }

  .each-slide .each-text {
    font-size: 1.1em;
    background-color: ${(props) => props.background};
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    justify-content: center;
    color: ${(props) => props.text};
    width: 50vw;
  }
  .each-img {
    width: 100%;
  }

  .slider-text {
    text-align: justify;
    margin-left: 200px;
    margin-right: 30px;
    @media (max-width: 800px) {
      height: 20%;
      font-size: 0.9em;
      margin-left: 0px;
    }
  }
  .each-title {
    display: flex;
    text-align: justify;
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 20px;
    margin-left: 200px;
    @media (max-width: 800px) {
      font-size: 0.9em;
      margin-left: 0px;
    }
  }
`;

export default Sslider;
