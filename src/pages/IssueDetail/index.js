import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IssueDetailHeader from './IssueDetailHeader';
import Markdown from '../../components/Markdown';
import LoadingSpinner from '../../components/LoadingSpinner';
import issueAPI from '../../utils/api';
import useAxios from '../../hooks/useAxios';
import parseDate from '../../utils/parseDate';
import { flexBox } from '../../styles/mixin';

function Issues() {
  const [isLoading, setIsLoading] = useState(true);
  const [issue, setIssue] = useState({});
  const { id } = useParams();
  const getIssue = useAxios(issueAPI.getIssue);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    getIssue(
      [id],
      {},
      {
        onSuccess: ({ user, number, title, created_at: createdAt, comments, body }) => {
          setIssue({ user, number, title, createdAt: parseDate(createdAt), comments, body });
          setIsLoading(false);
        },
        onError: state => {
          navigate('/error', { state });
        },
      }
    );
  }, []);

  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}

      {!isLoading && (
        <>
          <IssueDetailHeader issue={issue} />
          <MarkdownStyle>
            <Markdown>{issue?.body}</Markdown>
          </MarkdownStyle>
        </>
      )}
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

const LoadingContainer = styled.div`
  ${flexBox()};
  width: 100%;
  height: 200px;
`;
