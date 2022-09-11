import styled from "styled-components";

export const Form = styled.form``;
export const TextArea = styled.textarea`
    width: 100%;
    height: 70px;
    margin: 2rem 0;

`;
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    >:nth-child(1){
        background-color: #F44336;
        color: #FFF;
    }
    >:nth-child(2){
        background-color: #4CAF50;
        color: #FFF;
    }
`;
export const Button = styled.button`
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 0.25rem;
    &:hover{
        cursor: pointer;
        opacity: 0.85;
    }
`;