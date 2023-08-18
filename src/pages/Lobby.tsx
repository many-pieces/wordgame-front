import styled from "styled-components";
import Room from "../components/page/Lobby/Room.tsx";
import Button from "../components/common/Button.tsx";
const Lobby = () => {
  return (
      <Main>
          <Title>직장인 쿵쿵따</Title>
          <InputBtn input='방 만들기'/>
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
const InputBtn = styled(Button)`
  width: 30%;
  background-color: red;
`