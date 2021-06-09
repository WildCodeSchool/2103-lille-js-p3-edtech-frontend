import styled from 'styled-components';

const SPartners = styled.div`
  color: #2c2875;
  h1 {
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .partner-logo {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 90vw;
    margin: auto;
    a {
      display: flex;
      align-items: center;
      width: 200px;
      padding: 20px;
      img {
        filter: grayscale(100%);
        max-width: 100%;
      }
      img:hover {
        filter: grayscale(0%);
      }
    }
  }
`;

export default SPartners;
