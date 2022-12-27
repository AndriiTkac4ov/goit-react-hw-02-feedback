import styled from 'styled-components';

export const FeedbackButton = styled.button`
    padding: 4px 16px;
    margin: 0;
    background: ghostwhite;
    border-radius: 4px;
    border: 2px solid palevioletred;
    color: palevioletred;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out, border-color 0.25s ease-in-out;
    
    &:not(:last-child){
        margin-right: ${props => props.theme.spacing(4)};
    }

    &:hover,
    &:focus {
        background: gold;
        color: deepskyblue;
        border: 2px solid deepskyblue;
    }
`;
