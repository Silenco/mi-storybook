import React from 'react';
import { Panel } from './Panel';
import { Button } from '../Button';

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

const Template = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>Centered content</p>,
  width: '300px',
  height: '200px',
  backgroundColor: '#f0f0f0',
};

export const WithButton = Template.bind({});
WithButton.args = {
  children: <Button label="Click Me" primary='true'/>,
  width: '400px',
  height: '300px',
  backgroundColor: '#e0e0ff',
};
