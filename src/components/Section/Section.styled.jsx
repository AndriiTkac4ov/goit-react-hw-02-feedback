import styled from 'styled-components';

export const SectionPart = styled.section`
    margin: 0;
    padding: 16px 40px;
    text-align: center;
    background: floralwhite;
    color: palevioletred;
`;

export const SectionTitle = styled.h2`
    margin: 0 0 16px 0;
    font-size: ${props => props.theme.spacing(4)};
    font-weight: 700;
    line-height: 1.5;
`;
