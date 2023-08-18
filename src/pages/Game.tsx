import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button.tsx";

const Game = () => {
    return (
        <Main>
            <h1>게임</h1>
            <Link to={`/`}><Button input='나가기'/></Link>
        </Main>
    )
}
export default Game;

const Main = styled.div`
  text-align: center;
  font-size: 50px;
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  background-size: cover;
  background-image: url("/assets/bg/lobby.jpg");
`;