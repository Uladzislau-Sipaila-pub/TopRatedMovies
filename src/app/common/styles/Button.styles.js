

import styled from 'styled-components';

const buttonPadding = {
    'small': '4px 10px',
    'normal': '7px 17px',
    'large': '12px 70px',
};
const fontSize = {
    'small': '0.9rem',
    'normal': '1rem',
    'large': '1.05rem',
};

const buttonColors = {
    red: `
        color: #fff;
        background: #e50914;
        &:hover {
            background: #f40612;
        }
        &:active {
            background: #a01a20;
        }
    `,
    gray: `
        color: #fff;
        background-color: #3c3c3c;
        &:hover {
            background: #525252;
        }
        &:active {
            background: #292929;
        }
    `
};

const Button = styled.button`
  text-decoration: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
  padding: ${(props) => buttonPadding[props.size]};
  font-size: ${(props) => fontSize[props.size]};
  ${(props) => buttonColors[props.color]}

  &:focus {
    outline: none;
  }
`;

export default Button;