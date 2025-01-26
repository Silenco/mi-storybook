import React from 'react';
import '../src/styles/themes.css';
import '../src/styles/globals.css';
import { Preview } from '@storybook/react';

export const decorators = [
  (Story, context) => {
    const themeClass = context.globals.theme || 'theme-light';
    return (
      <div className={themeClass}>
        <Story />
      </div>
    );
  },
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          {value: 'theme-light', title: "Light mode", icon: 'sun' },
          {value: 'theme-dark', title: "Dark mode", icon: "moon" }],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'theme-light',
  },
};

export default preview;
