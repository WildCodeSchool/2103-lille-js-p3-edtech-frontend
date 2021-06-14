import styled from 'styled-components';

const SFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('../img/footer/Footer_EdTech_HdF.png');
  font-size: 0.8em;
  padding: 20px;
  display: flex;
  justify-content: flex-end;

  .copyright {
    text-align: right;
    line-height: 1.5em;
    width: 30vw;
    color: white;

    @media (max-width: 1024px) {
      width: 40vw;
    }
    @media (max-width: 768px) {
      width: 50vw;
    }
    @media (max-width: 425px) {
      width: 90vw;
    }
  }
`;

export default SFooter;
