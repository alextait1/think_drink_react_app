import React from 'react';
import styled from 'styled-components';

export const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// export const Button = styled.button`
//   color: ${props => props.theme.btnPrimary}
// `;

// const theme = {
//   btnPrimary: rgba(84, 65, 111, 1),
// };
