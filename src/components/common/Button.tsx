import styled from "styled-components";

type ButtonType = {
    input : string;
}
const Button = ({input} : ButtonType) => {

    return (
        <MyButton>{input}</MyButton>
    )
}

export default Button;

const MyButton = styled.button`
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
  background-color: white;
  width: 130px;
  font-size: 18px;
`