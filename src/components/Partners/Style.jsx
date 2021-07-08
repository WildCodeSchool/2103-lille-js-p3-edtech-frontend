import styled from 'styled-components';

const SPartners = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  padding-top: 30px;
  padding-bottom: 20px;
  h1 {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 30px;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  .partner-logo {
    @media (max-width: 400px) {
      display: none;
    }
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 90vw;
    margin: auto;
    a {
      display: flex;
      align-items: center;
      width: 150px;
      padding: 70px;
      img {
        filter: grayscale(100%);
        max-width: 100%;
      }
      img:hover {
        filter: grayscale(0%);
      }
    }
  }
  .Carousel {
    @media (min-width: 400px) {
      display: none;
    }
    margin: auto;
    height: 20vh;
    .react-multiple-carousel__arrow--left {
      left: 10px;
    }
    .react-multiple-carousel__arrow--right {
      right: 10px;
    }
    .slide {
      display: flex;
      align-items: center;
      overflow: hidden;
      margin: auto;
      width: 30vw;
      height: 25vh;

      img {
        display: block;
        max-height: 100%;
        max-width: 100%;
        filter: grayscale(100%);
        margin: auto;
      }
      img:hover {
        filter: grayscale(0%);
      }
    }
  }
`;

export default SPartners;
