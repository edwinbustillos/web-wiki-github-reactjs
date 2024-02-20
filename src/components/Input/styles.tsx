import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #FAFAFA;
  border-radius: 20px;
  height: 60px;
  width: 80%;
  margin: 20px;
  input{
    background-color: transparent;
    border: none;
    width: 90%;
    height: 60px;
    padding: 0 20px;
    color: #FFF;
    font-size: 20px; 
    &:focus {
      outline: none;
    }
  } 
`;