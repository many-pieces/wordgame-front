import styled from "styled-components";
import InputSheet from "./inputField/InputSheet.tsx";
import WordList from "./inputField/WordList.tsx";

type InputProps = {
    input : string
}
const InputField = ({input} : InputProps) => {
    return (
        <InputZone>
            <WordList input={input}/>
            <InputSheet/>
        </InputZone>
    )
}

export default InputField;

const InputZone = styled.div`
  background-color: wheat;
  width: 100vw;
  height: 20%;
`;