import styled from 'styled-components';

const SFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  
  height: 10vh;
  font-size: 1em;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  
  .background{
    
    width: 100%;
  }
  .links {
    font-size: 1em;
    margin-right: 10%;
    line-height: 1.5em;
  }

  .links a {
    color: white;
    text-decoration: none;
  }

  .copyright {
    text-align: right;
    line-height: 1.5em;
    width: 30vw;
    color: white;
  }

  .copyright a {
    color: white;
    text-decoration: none;
  }

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
