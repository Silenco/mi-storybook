import React from "react";
import {Button} from "./Button";
import { action } from '@storybook/addon-actions';


export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: action('button-click'),
  },
};

// Plantilla común para todas las variantes
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
