import styled from "styled-components";

const DiaryCard = ({ author, content, created_date, emotion, id }) => {
  return (
    <DiaryCardWrapper>
      <p>
        작성자: {author} | 기분점수: {emotion}
      </p>
      <p>날짜: {new Date(created_date).toLocaleString()}</p>
      <p>내용: {content}</p>
    </DiaryCardWrapper>
  );
};

export default DiaryCard;

const DiaryCardWrapper = styled.div`
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);

  p:nth-child(2) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  p:last-child {
    font-weight: bold;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;
