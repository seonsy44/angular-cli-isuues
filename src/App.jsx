import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox, responsive } from './styles/mixin';
import Header from './components/Header';
import Issues from './pages/Issues';
import IssueDetail from './pages/IssueDetail';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/:id" element={<IssueDetail />} />
          <Route path="/error" element={<Error />} />
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
