import styled from 'styled-components';

const SMembers = styled.div`
  color: #2c2875;
  h1 {
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .Carousel {
    margin: auto;
    height: 20vh;
    .react-multiple-carousel__arrow--left {
      left: 10px;
    }
    .react-multiple-carousel__arrow--right {
      right: 10px;
    }
    .slide {
      margin: auto;
      width: 90%;
      height: 15vh;

      img {
        display: block;
        height: 100%;
        filter: grayscale(100%);
        margin: auto;
      }
      img:hover {
        filter: grayscale(0%);
      }
    }
  }
`;
export default SMembers;
