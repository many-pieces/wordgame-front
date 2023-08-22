import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/Button.tsx";

type RoomProps = {
    name : string
}
const Room = ({name} : RoomProps) => {
    return (
        <Container>
            <Title>{name}</Title>
            <Text>참가자 수 : 1/5</Text>
            <Link to={`game`}><Button input='게임입장'/></Link>
        </Container>
    )
}

export default Room;

const Container = styled.div`
  max-width: 350px;
  min-width: 300px;
  width: 30%;
  height: 200px;
  border: solid 3px lightblue;
  border-radius: 20px;
  background-color: antiquewhite;
  text-align: center;
  padding: 10px;
  background-image: url("/assets/bg/p15.jpg");
`
const Title = styled.h1`
  padding: 10px;
  background-color: black;
  width: 80%;
  margin: 10px auto;
  border-radius: 30px;
  color: white;
  text-align: center;
`
const Text = styled.div`
  font-size: 20px;
  padding: 15px 0;
`;