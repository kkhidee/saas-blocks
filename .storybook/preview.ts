import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'tailwind',
      values: [
        {
          name: 'tailwind',
          value: '#1A1D2D',
        },
      ],
    },
  },
};

export default preview;
