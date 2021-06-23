import styled from 'styled-components';

const SFooter = styled.footer`
  bottom: 0;
  left: 0;
  right: 0;
  height: 17vh;
  font-size: 0.8em;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  background-color: #2c2875;

  .infos {
    color: white;
    font-size: 0.9em;
    line-height: 1.5em;
  }

  .infos {
    color: white;
    font-size: 1em;
    line-height: 1.5em;
  }
  .links {
    font-size: 0.9em;
    line-height: 1.5em;
    margin-right: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .links a {
    color: white;
    text-decoration: none;
  }

  .copyright {
    text-align: right;
    line-height: 1.5em;
    width: 15vw;
    color: white;
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }

  .copyright a {
    color: white;
    text-decoration: none;
    font-size: 0.9em;
  }

  .date {
    color: white;
    font-size: 0.9em;
  }
`;

export default SFooter;
