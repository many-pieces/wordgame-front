import styled from "styled-components";
import {useState} from "react";

const InputSheet = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
        console.log("누름?", showMessage);
        setTimeout(() => {
            setShowMessage(false);
        }, 800);
    };
    return (
        <Container>
            <Input placeholder={"정답을 입력하세요"}/>
            <Button onClick={handleButtonClick}>보내기</Button>
            {showMessage && <Message>메일 전송!</Message>}
        </Container>
    )
}

export default InputSheet;

const Container = styled.div`
  width: 100vw;
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Input = styled.input`
  width: 80%;
  height: 50px;
  margin: 10px;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const Button = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
`;

const Message = styled.div`
  position: fixed;
  top: 30vh;
  color: white;
  opacity: 0;
  transform: scale(0);
  animation: fadeAndScale 1s ease-in-out;
  @keyframes fadeAndScale {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
`;