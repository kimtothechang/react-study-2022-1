import { useState, useRef } from "react";
import styled from "styled-components";

const DiaryCard = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <DiaryCardWrapper>
      <p>
        작성자: {author} 기분점수: {emotion}
      </p>
      <p>{new Date(created_date).toLocaleString()}</p>
      {isEdit ? (
        <textarea
          value={localContent}
          onChange={(e) => setLocalContent(e.target.value)}
          ref={localContentInput}
        />
      ) : (
        <p>{content}</p>
      )}
      <ButtonBox>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>취소</button>
            <button onClick={handleEdit}>완료</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정</button>
            <button onClick={handleRemove}>삭제</button>
          </>
        )}
      </ButtonBox>
    </DiaryCardWrapper>
  );
};

export default DiaryCard;

const DiaryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  textarea {
    margin: 16px 0px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
`;
