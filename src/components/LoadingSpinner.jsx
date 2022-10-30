import styled, { keyframes } from 'styled-components';
import { positionCenterX, positionCenterY } from '../styles/mixin';

function LoadingSpinner() {
  return (
    <Container>
      <SubContainer>
        <div />
        <div />
        <div />
        <div />
      </SubContainer>
      <SubContainer>
        <div />
        <div />
        <div />
        <div />
      </SubContainer>
    </Container>
  );
}

export default LoadingSpinner;

const rotate = keyframes`
  0% {
    background-color: #F6F8FA;
  }
  12.5% {
    background-color: #D0D7DE;
  }
  25% {
    background-color: #0969DA;
  }
  100% {
    background-color: #0969DA;
  }
`;

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  > div:first-child > div:first-child {
    background-color: ${({ theme }) => theme.backgroundColor};
    animation: ${rotate} 1000ms linear 0s infinite;
  }
  > div:first-child > div:nth-child(2) {
    animation: ${rotate} 1000ms linear 250ms infinite;
  }
  > div:first-child > div:nth-child(3) {
    animation: ${rotate} 1000ms linear 500ms infinite;
  }
  > div:first-child > div:nth-child(4) {
    animation: ${rotate} 1000ms linear 750ms infinite;
  }

  > div:last-child {
    transform: rotate(45deg);
  }

  > div:last-child > div:first-child {
    background-color: ${({ theme }) => theme.borderColor};
    animation: ${rotate} 1000ms linear 125ms infinite;
  }
  > div:last-child > div:nth-child(2) {
    animation: ${rotate} 1000ms linear 375ms infinite;
  }
  > div:last-child > div:nth-child(3) {
    animation: ${rotate} 1000ms linear 625ms infinite;
  }
  > div:last-child > div:nth-child(4) {
    animation: ${rotate} 1000ms linear 875ms infinite;
  }
`;

const SubContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  > div {
    position: absolute;
    width: 8px;
    height: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.pointColor};
  }

  > div:nth-child(1) {
    ${positionCenterX()}
  }
  > div:nth-child(2) {
    width: 20px;
    height: 8px;
    ${positionCenterY()};
    right: 0;
  }
  > div:nth-child(3) {
    ${positionCenterX()}
    bottom: 0;
  }
  > div:nth-child(4) {
    width: 20px;
    height: 8px;
    ${positionCenterY()};
    left: 0;
  }
`;
