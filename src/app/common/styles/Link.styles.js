

import styled from 'styled-components';

const linkColors = {
    red: `
        color: #e50914;
        &:hover {
            color: #f40612;
        }
        &:active {
            color: #a01a20;
        }
    `,
    default: `
        &:hover {
            color: #525252;
        }
        &:active {
            color: #292929;
        }
    `
};

const StyledLink = styled.a`
  cursor: pointer;
  ${(props) => linkColors[props.color]}
`;

export default StyledLink;