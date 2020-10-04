import { css } from 'styled-components';

import ProximaMedium500 from '../assets/fonts/proxima-nova-medium.ttf';
import ProximaBold700 from '../assets/fonts/proxima-nova-bold.ttf';
import ProximaExtraBold800 from './../assets/fonts/proxima-nova-extrabold.ttf';

export const fontFaces = css`
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 500;
    src: url(${ProximaMedium500});
  }
  
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 700;
    src: url(${ProximaBold700});
  }

  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 800;
    src: url(${ProximaExtraBold800});
  }
`;