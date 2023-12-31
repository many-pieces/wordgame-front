import styled from "styled-components";
import Room from "../components/page/lobby/Room.tsx";
const Lobby = () => {
    const createRoom = () => {
        alert("준비 중인 기능입니다.");
    }
  return (
      <Main>
          <Title>직장인 쿵쿵따</Title>
          <InputBtn onClick={createRoom}>방 만들기</InputBtn>
          <Container>
              <Room name="내가최고야 음하하"/>
              <Room name="어쩔티비~ 저쩔티비~"/>
              <Room name="연차야 쌓여라~!"/>
              <Room name="오늘을 월급날! 치킨이닭!"/>
              <Room name="오늘을 월급날! 치킨이닭!"/>
          </Container>
      </Main>

  )
}

export default Lobby;

const Main = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  padding-top: 5%;
  overflow: auto;
  background-size: cover;
  background-image: url("/assets/bg/city.jpg");
  //background: rgb(2,0,36);
  //background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(64,64,207,1) 65%, rgba(25,135,212,1) 86%, rgba(91,204,255,1) 100%);  
`;
const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;
`;

const Title = styled.h1`
  font-size: 30px;
  padding: 20px;
  background-color: black;
  text-shadow: 2px 2px 2px gray;
  width: 300px;
  margin: 30px auto;
  //border: solid 3px #ffffff;
  border-radius: 30px;
  color: white;
  text-align: center;
`
const InputBtn = styled.button`
  width: 200px;
  background-color: #f6d656;
  padding: 10px;
  border-radius: 30px;
  font-size: 20px;
  margin: 10px 0 30px 0;
  cursor: pointer;
`