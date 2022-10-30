import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox, responsive } from './styles/mixin';
import Header from './components/Header';
import Issues from './pages/Issues';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Issues />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  ${flexBox()};
  padding: 30px;

  ${responsive('phone')} {
    padding: 0;
  }
`;
