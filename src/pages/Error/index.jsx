import styled from 'styled-components';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { flexBox, positionCenterY } from '../../styles/mixin';

function Error() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClick = () => navigate(-2);

  if (!state) return <Navigate to="/" />;

  return (
    <Container>
      <span>{state?.status}</span> {state?.errorMsg}
      <Button type="button" onClick={onClick}>
        go back
      </Button>
    </Container>
  );
}

export default Error;

const Container = styled.main`
  ${positionCenterY()};
  ${flexBox('column')};
  width: 100%;
  padding: 10px;
  font-size: 35px;
  font-weight: 600;

  > span {
    color: ${({ theme }) => theme.pointColor};
    margin-right: 10px;
    font-size: 25px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5vh;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;
