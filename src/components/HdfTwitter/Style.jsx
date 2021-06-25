import styled from 'styled-components';

const SActuTwit = styled.div`
  background-color: #2c2875;
  color: #f5f5f5;

  h1 {
    padding: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  .ActuTwit {
    display: flex;
  }

  .twoActus-twit {
    position: relative;
    padding: 1.5rem;
    overflow-y: hidden;
    width: 100%;
  }

  .twoActus {
    line-height: 1.7;
    font-size: 1.3rem;
  }

  .twoActus h1 {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
  }

  .actu1 {
    display: flex;
  }

  .photo_actu {
    margin-left: 1rem;
    margin-top: 4.6rem;
    height: 10rem;
    width: 10rem;
    border-radius: 10px;
  }

  .actu2 {
    display: flex;
  }

  .twoActus a {
    text-decoration: none;
    color: #f5f5f5;
  }

  .twit-title {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .twit-content {
    position: absolute;
    height: 100%;
    width: 95%;
    overflow-y: scroll;
    border-radius: 10px;
  }

  .actu3 {
    display: none;
  }
  .actu4 {
    display: none;
  }
  .actu5 {
    display: none;
  }
`;

export default SActuTwit;
