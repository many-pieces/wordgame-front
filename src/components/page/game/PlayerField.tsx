import styled from "styled-components";
import Player from "./playerField/Player.tsx";
import Player2 from "./playerField/Player2.tsx";
import Player3 from "./playerField/Player3.tsx";
import Player4 from "./playerField/Player4.tsx";

const PlayerField = () => {

    return (
        <PlayerZone>
            <Player point={500} lank={1}/>
            <Player2 point={100} lank={4}/>
            <Player3 point={350} lank={2}/>
            <Player4 point={220} lank={3}/>
        </PlayerZone>
    )
}

export default PlayerField;

const PlayerZone = styled.div`
  //background-color: #dbf5b3;
  width: 100vw;
  height: 65%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-size: cover;
  background-image: url("/assets/bg/gameBg.jpg");
  //background: linear-gradient(#30ab30 50%, #363535 50%);
  //background-size: 100% 50px;
`;