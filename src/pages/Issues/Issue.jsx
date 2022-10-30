import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';
import parseDate from '../../utils/parseDate';

const adURL =
  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

function Issue({ issue: { number, title, user, created_at: date, comments }, idx }) {
  const createdAt = parseDate(date);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${number}`);
  };

  return (
    <>
      {idx === 4 && (
        <a href="https://www.wanted.co.kr/">
          <Advertisement>
            <span>ad</span>
            <img alt="ad" src={adURL} />
          </Advertisement>
        </a>
      )}

      <Container>
        <Title onClick={handleClick}>
          #{number} <span>{title}</span>
        </Title>
        <Information>
          <div>
            {createdAt} by {user.login}
          </div>
          <div>comments: {comments}</div>
        </Information>
      </Container>
    </>
  );
}

export default React.memo(Issue);

const Container = styled.article`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

const Title = styled.h1`
  display: inline;
  font-size: 20px;
  color: ${({ theme }) => theme.pointColor};
  line-height: 26px;
  cursor: pointer;

  > span {
    font-weight: 800;
    color: black;

    &:hover {
      color: ${({ theme }) => theme.pointColor};
    }
  }
`;

const Information = styled.div`
  ${flexBox('row', 'space-between')}
  margin-top: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.grayColor};
`;

const Advertisement = styled.div`
  position: relative;
  ${flexBox()}
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;

  > span {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 3px 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.pointColor};
    color: white;
    font-size: 14px;
  }

  > img {
    height: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;
