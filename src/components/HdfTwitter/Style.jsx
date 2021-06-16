import styled from 'styled-components';

const SActuTwit = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 600px;
  margin-top: 3rem;

  .twoActus {
    line-height: 1.7;
  }

  .actu1 {
    display: flex;
    margin-bottom: 2rem;
  }

  .photo_actu {
    margin-left: 1rem;
    height: 15rem;
    width: 15rem;
    border-radius: 10px;
  }

  .actu2 {
    display: flex;
  }

  .actu-widget-twitter {
    text-align: center;
  }
`;

export default SActuTwit;
