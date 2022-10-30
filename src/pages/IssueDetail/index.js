import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IssueDetailHeader from './IssueDetailHeader';
import Markdown from '../../components/Markdown';
import issueAPI from '../../utils/api';
import useAxios from '../../hooks/useAxios';
import parseDate from '../../utils/parseDate';

function Issues() {
  const [issue, setIssue] = useState({});
  const { id } = useParams();
  const getIssue = useAxios(issueAPI.getIssue);

  useEffect(() => {
    getIssue(
      [id],
      {},
      {
        // setLoading(false);
        onSuccess: ({ user, number, title, created_at: createdAt, comments, body }) =>
          setIssue({ user, number, title, createdAt: parseDate(createdAt), comments, body }),
      }
    );
  }, []);

  return (
    <Container>
      <IssueDetailHeader issue={issue} />
      <MarkdownStyle>
        <Markdown>{issue?.body}</Markdown>
      </MarkdownStyle>
    </Container>
  );
}

export default Issues;

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 10px;
`;

const MarkdownStyle = styled.div`
  padding: 10px;
`;
