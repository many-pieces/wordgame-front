import {Link} from "react-router-dom";
import styled from "styled-components";
import AnswerField from "../components/page/game/AnswerField.tsx";
import PlayerField from "../components/page/game/PlayerField.tsx";
import InputField from "../components/page/game/InputField.tsx";

const Game = () => {
    const answer = "입력한단어";
    return (
        <Main>
            <Link to={`/`}><ExitBtn>X</ExitBtn></Link>
            <AnswerField input={answer} player={"zl존피스킹"}/>
            <PlayerField/>
            <InputField  input={answer}/>

        </Main>
    )
}
export default Game;

const Main = styled.div`
  text-align: center;
  font-size: 50px;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  //background-image: url("/assets/bg/lobby.jpg");
`;

const ExitBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 5px;
`;
