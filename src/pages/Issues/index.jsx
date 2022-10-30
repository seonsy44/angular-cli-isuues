import styled from 'styled-components';
import { useContext, useEffect, useRef } from 'react';
import { IssuesContext } from '../../contexts/issuesContext';
import useAxios from '../../hooks/useAxios';
import { responsive } from '../../styles/mixin';
import issueAPI from '../../utils/api';
import Issue from './Issue';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function Issues() {
  // const [loading, setLoading] = useState(true);
  const target = useRef(null);
  const issues = useContext(IssuesContext);
  const getIssues = useAxios(issueAPI.getIssues);
  const { count } = useInfiniteScroll({
    target,
    targetArray: issues.list,
    pageSize: 20,
  });

  useEffect(() => {
    getIssues(
      [],
      { state: 'open', sort: 'comments', per_page: 20, page: count },
      {
        // setLoading(false);
        onSuccess: data => issues.add(data),
      }
    );
  }, [count]);

  return (
    <Container ref={target}>
      {issues.list.map((issue, idx) => (
        <Issue key={issue.number} issue={issue} idx={idx} />
      ))}
    </Container>
  );
}

export default Issues;

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;

  ${responsive('phone')} {
    border: none;
  }
`;
