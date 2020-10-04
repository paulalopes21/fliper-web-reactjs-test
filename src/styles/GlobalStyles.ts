import { createGlobalStyle } from 'styled-components';
import { fontFaces } from './FontFace';

export default createGlobalStyle`

   ${fontFaces}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--color-bg);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  *, button {
    border: 0;
    background: none;
    font-family: 'Proxima Nova', sans-serif;
  }
  
  :root {
    --color-bg: #E8EBF6;
    --color-primary: #3B5CB8;
    --color-secondary: #606377;
    --color-black: #333;
    --color-white: #FFF;
    --color-border: #9AA3BC;
    --button-shadow: 1px 1px 1px 0 rgba(0,0,0,.1);
    --card-shadow: 2px 2px 1px 0 #9AA3BC;
  }
`;