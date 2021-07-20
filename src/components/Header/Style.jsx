import styled from 'styled-components';

const SHeader = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  background-image: url('${(props) => props.background_img}');
  background-size: cover;

  .logo {
    text-align: center;
    padding: 15px;
  }
`;
export default SHeader;
