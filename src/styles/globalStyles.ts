import { css } from '@emotion/react'
import { cssReset } from './reset'

const globalStyles = css`
  ${cssReset}

  :root {
    /* Colors */
    --black: hsl(210, 29%, 10%);
    --white: hsl(0, 0%, 100%);
    --gray-400: hsl(0, 0%, 40%);
    --gray-200: hsl(0, 0%, 80%);
    --gray-100: hsl(0, 0%, 97%);

    /* Intentions */
    --background: var(--gray-100);
    --textColor: var(--black);
    --lineColor: var(--gray-200);
    --roundness: 8px;

    /* Elevations */
    --elevation-1: hsla(0, 0%, 0%, 10%);

    /* Type */
    --bodyFont: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';

    --textBaseSize: 1rem;
    --headingFont: var(--bodyFont);
    /* Major Third type scale */
    --headingScaleRatio: 0.8;
    --h1: calc(var(--h2) / var(--headingScaleRatio)); // 48.8281
    --h2: calc(var(--h3) / var(--headingScaleRatio)); // 39.0625
    --h3: calc(var(--h4) / var(--headingScaleRatio)); // 31.25
    --h4: calc(var(--h5) / var(--headingScaleRatio)); // 25
    --h5: calc(1em / var(--headingScaleRatio)); // 20
    --smallText: calc(1em * var(--headingScaleRatio)); // 12.8

    /* Spacing (fibonacci) */
    --space-unit: 1em;
    --space-1: calc(0.25 * var(--space-unit));
    --space-2: calc(0.5 * var(--space-unit));
    --space-3: calc(0.75 * var(--space-unit));
    --space-4: calc(1.25 * var(--space-unit));
    --space-5: calc(2 * var(--space-unit));
    --space-6: calc(3.25 * var(--space-unit));
    --space-7: calc(5.25 * var(--space-unit));
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: var(--bodyFont);
    font-weight: 400;
    background: var(--background);
    color: var(--textColor);
    line-height: 1.4;
  }

  p {
    margin-bottom: 1rem;
    a {
      color: var(--textColor);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 var(--space-4);
    font-family: var(--headingFont);
    font-weight: 700;
    line-height: 1.3;
  }

  h1 {
    font-size: var(--h1);
  }

  h2 {
    font-size: var(--h2);
  }

  h3 {
    font-size: var(--h3);
  }

  h4 {
    font-size: var(--h4);
  }

  h5 {
    font-size: var(--h5);
  }

  small {
    font-size: var(--smallText);
  }
`
export { globalStyles }
