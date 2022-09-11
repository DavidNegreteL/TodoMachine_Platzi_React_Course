import styled from "styled-components";
export const Modal = styled.div`
    position: fixed;
    padding-top: 300px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000;
    background-color: rgba(0,0,0,0.4);
`;
export const ModalContent = styled.div`
    position: relative;
    background-color: #FEFEFE;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    border-radius: 1rem;
    max-width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

`;
export const ModalHeader = styled.div`
    border-radius: 1rem 1rem 0 0;
    padding: 2px 16px;
    background-color: #5CB85C;
    color: #FFF;
    &>svg{
        fill: white;
        float: right;
        font-size: 28px;
        padding-top: 18px;
        &:hover{
            cursor: pointer;
            opacity: 0.85;
        }
    }
`;
export const ModalBody = styled.div`
    padding: 2px 16px;
`;
export const ModalFooter = styled.div`
    padding: 0.5rem;
    border-radius: 0 0 1rem 1rem;
    background-color: #5CB85C;
    color: #FFF;
`;