import React from 'react';
import styled from 'styled-components';

export const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
//TODO: update button to be a styled component expressing the theme

// export const Button = styled.button`
//   color: ${props => props.theme.btnPrimary}
// `;

// const theme = {
//   btnPrimary: rgba(84, 65, 111, 1),
// };
