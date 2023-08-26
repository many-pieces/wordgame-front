import PlayerImg from "/assets/players/player2.png"
import styled from "styled-components";

type PlayerProps = {
    point : number
    lank : number
}
const Player = (props : PlayerProps) => {

    return (
        <Container>
            <Inner>
                <LankMark>{props.lank}</LankMark>
                <NickName>닉네임</NickName>
            </Inner>
            <Img src={PlayerImg}></Img>
            <Point>{props.point}점</Point>
        </Container>
    )
}

export default Player;

const Container = styled.div`
  display: block;
`;
const Inner = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 5px;
`;
const LankMark = styled.div`
  background-color: #f37330;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 22px;
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  @media all and (max-width:767px) {
    font-size: 18px;
    width: 20px;
    height: 20px;
  }
`;
const Img = styled.img`
  max-width: 100px;
  width: 12vw;
`;

const Point = styled.div`
  background-color: #9df556;
  border-radius: 10px;
  font-size: 20px;
  padding: 3px;
  width: 80px;
  margin: 0 auto;
  @media all and (max-width:767px) {
    font-size: 18px;
    padding: 0;
    width: 60px;
  }
`;
const NickName = styled.p`
  color: white;
  font-size: 20px;
  margin: 2px auto;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 2px 5px;
  @media all and (max-width:767px) {
    font-size: 15px;
    padding: 0;
    width: 50px;
  }
`;