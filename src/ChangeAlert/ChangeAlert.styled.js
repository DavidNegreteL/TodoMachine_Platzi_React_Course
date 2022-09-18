import styled from "styled-components";

export const AlertCard = styled.div`
    width: 75%;
    height: 20%;
    box-shadow: 0px 4px 16px rgb(0 0 0 / 25%);
    border-radius: 0.5rem;
`;

export const CardTitleSection = styled.section`
    background-color: rgb(238, 178, 0);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem 0.5rem 0 0;
`;

export const CardTitle = styled.h3``;

export const CardActionSection = styled.section`
    background-color: rgb(255, 224, 134);
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0 0 0.5rem 0.5rem;
    color: #000000;
`;

export const CardButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #FFFFFF;
    font-weight: bold;
    &:hover{
            cursor: pointer;
        }
`;
