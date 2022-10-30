import styled from 'styled-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { IssuesContext } from '../../contexts/issuesContext';
import useAxios from '../../hooks/useAxios';
import { flexBox, responsive } from '../../styles/mixin';
import issueAPI from '../../utils/api';
import Issue from './Issue';
import LoadingSpinner from '../../components/LoadingSpinner';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function Issues() {
  const [loading, setLoading] = useState(true);
  const target = useRef(null);
  const issues = useContext(IssuesContext);
  const getIssues = useAxios(issueAPI.getIssues);
  const { count } = useInfiniteScroll({
    target,
    targetArray: issues.list,
    pageSize: 20,
  });

  useEffect(() => {
    setLoading(true);
    getIssues(
      [],
      { state: 'open', sort: 'comments', per_page: 20, page: count },
      {
        onSuccess: data => {
          if (count === 1) issues.set(data);
          else issues.add(data);
          setLoading(false);
        },
      }
    );
  }, [count]);

  return (
    <Container ref={target}>
      {issues.list.map((issue, idx) => (
        <Issue key={issue.number} issue={issue} idx={idx} />
      ))}

      {loading && (
        <LoadingContainer>
          {' '}
          <LoadingSpinner />
        </LoadingContainer>
      )}
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

const LoadingContainer = styled.div`
  ${flexBox()};
  height: 150px;
`;
