import { useState } from "react";
import styled from "styled-components";
import DiaryCard from "./DiaryCard";

const DiaryList = ({ diaryList }) => {
  return (
    <DiaryWrapper>
      <h2>일지</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryCard key={it.id} {...it} />
        ))}
      </div>
    </DiaryWrapper>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

const DiaryWrapper = styled.div`
  h2 {
    text-align: center;
  }
`;
