import styled from "styled-components";

type InputProps = {
    input : string
}
const NewWord = ({input}: InputProps) => {

    return (
        <Container>
            <p>{input}</p>
        </Container>
    )
}

export default NewWord;

const Container = styled.div`
  width: 20%;
  height: 45%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: 2px solid greenyellow;
  padding: 3px;
  @media all and (max-width:767px) {
    font-size: 13px;
  }
`;