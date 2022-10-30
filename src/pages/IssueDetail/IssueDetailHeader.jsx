import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';

function IssueDetailHeader({ issue }) {
  return (
    <Container>
      <img alt="profile" src={issue?.user?.avatar_url} />
      <TitleContainer>
        <Title>
          #{issue?.number} <span>{issue?.title}</span>
        </Title>
        <Information>
          <div>
            {issue?.createdAt} by {issue?.user?.login}
          </div>
          <div>comments: {issue?.comments}</div>
        </Information>
      </TitleContainer>
    </Container>
  );
}

export default IssueDetailHeader;

const Container = styled.header`
  ${flexBox('row', 'flex-start', 'flex-start')};
  padding: 10px;

  > img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const TitleContainer = styled.div`
  ${flexBox('column', 'space-between', 'flex-start')}
  width: 100%;
  min-height: 75px;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const Title = styled.h1`
  display: inline;
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.pointColor};
  line-height: 26px;

  > span {
    font-weight: 800;
    color: black;
  }
`;

const Information = styled.div`
  ${flexBox('row', 'space-between')};
  width: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.grayColor};
`;
