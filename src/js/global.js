// Estilos globales de la aplicacion

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Bai Jamjuree', sans-serif;
},
*::after,
*::before {
    box-sizing: border-box;
}

body, button, .modal {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Bai Jamjuree', sans-serif;
    transition: all 0.25s linear;
}
`;
