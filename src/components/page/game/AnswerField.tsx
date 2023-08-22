import styled from "styled-components";

type AnswerProps = {
    input : string
    player : string
}
const AnswerField = ({input, player} : AnswerProps) => {
    return (
        <AnswerZone>
            <AnswerSheet>
                <p>✉️ 보낸사람 : {player}</p>
                <Answer>{input}</Answer>
            </AnswerSheet>
        </AnswerZone>
    )
}

export default AnswerField;

const AnswerZone = styled.div`
  background-color: #cbefca;
  width: 100vw;
  height: 15%;
  padding: 10px;
  font-size: 20px;
  overflow: auto;
  background-image: url("/assets/bg/gameBg.jpg");
  
`;

const AnswerSheet = styled.div`
  background-color: white;
  text-align: left;
  padding: 10px;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  border: 3px dotted black;
`;

const Answer = styled.div`
  background-color: #ecebeb;
  margin-top: 5px;
  border-radius: 10px;
  text-align: center;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;