import styled from 'styled-components';

const SPartners = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  padding-top: 30px;
  padding-bottom: 20px;
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
      width: 150px;
      padding: 30px;
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
