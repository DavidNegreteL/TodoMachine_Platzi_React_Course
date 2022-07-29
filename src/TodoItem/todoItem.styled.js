import styled from 'styled-components';

export const TodoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    list-style: none;
    margin-left: 0;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'}
`;

export const ItemDoneButton = styled.span`
    cursor: pointer;
    > svg {
        fill: ${props => props.completed ? 'green' : 'white'}
    }
    
`;

export const ItemDeleteButton = styled.span`
    cursor: pointer;
    &:hover{
        > svg{
            fill: red;
        }
    }
`;