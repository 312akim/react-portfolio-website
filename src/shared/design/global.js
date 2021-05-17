import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overflow-y: auto;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
    
    body {
        align-items: center;
        background: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.primaryLight};;
        text-rendering: optimizeLegibility;
    }
`