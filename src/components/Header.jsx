import styled from 'styled-components';
import { flexBox, responsive } from '../styles/mixin';
import useRouter from '../hooks/useRouter';

function Header() {
  const router = useRouter();

  const handleClick = () => router.push('/');

  return (
    <Container>
      <Title onClick={handleClick}>Angluar / Angluar-cli</Title>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: calc(100% + 60px);
  height: 120px;
  transform: translateX(-30px);
  ${flexBox()};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  font-size: 30px;
  font-weight: 500;

  ${responsive('phone')} {
    width: 100%;
    height: 100px;
    transform: translateX(0px);
  }
`;

const Title = styled.h1`
  cursor: pointer;
`;
