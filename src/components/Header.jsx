import styled from 'react-emotion';

const Header = styled.div`
  background: ${props => props.theme.brand.secondary};
  color: #fff;
  margin-bottom: 6rem;
  padding: 6rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  h1 {
    margin-bottom: 0;
  }
`;

export default Header;
