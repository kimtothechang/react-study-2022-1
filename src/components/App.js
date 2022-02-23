import styled from "styled-components";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <MyHeader />
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;

const GreenText = styled.p`
  color: green;
`;
