import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { flexBox, responsive } from '../styles/mixin';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <Container>
      <Title onClick={handleClick}>Angluar / Angluar-cli</Title>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100vw;
  height: 110px;
  ${flexBox()};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  font-size: 30px;
  font-weight: 500;

  ${responsive('phone')} {
    height: 95px;
    font-size: 26px;
  }
`;

const Title = styled.h1`
  cursor: pointer;
`;
