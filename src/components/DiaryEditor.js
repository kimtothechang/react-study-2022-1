import styled from "styled-components";
import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 완료");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <DiaryWrapper>
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder="작성자"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="내용"
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </DiaryWrapper>
  );
};

export default DiaryEditor;

const DiaryWrapper = styled.div`
  border: 1px solid gray;
  text-align: center;
  padding: 20px;

  input,
  textarea {
    margin-bottom: 20px;
    width: 500px;
    padding: 10px;
  }

  textarea {
    height: 150px;
  }

  select {
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
  }

  button {
    width: 500px;
    padding: 10px;
    cursor: pointer;
  }
`;
