import styled from "styled-components";
import NewWord from "./NewWord.tsx";

type WordProps = {
    input : string
}
const WordList = ({input}: WordProps) => {

    return (
        <Container>
            <NewWord input={input}/>
            <NewWord input={input}/>
            <NewWord input={input}/>
            <NewWord input={input}/>
        </Container>
    )
}

export default WordList;

const Container = styled.div`
  background-color: #232323;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content:space-between;
  padding: 5px;
`;