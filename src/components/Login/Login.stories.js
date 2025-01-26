import React from "react";
import { Login } from "./Login";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    onLogin: { action: "onLogin" },
  },
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithInteraction = Template.bind({});
WithInteraction.args = {};
WithInteraction.play = async ({ args, canvasElement }) => {
  const { getByPlaceholderText, getByText } = within(canvasElement);

  // Fill in the username input
  await userEvent.type(getByPlaceholderText("Username"), "testuser");

  // Fill in the password input
  await userEvent.type(getByPlaceholderText("Password"), "password123");

  // Click the login button
  await userEvent.click(getByText("Login"));

  // Ensure the action was triggered
  expect(args.onLogin).toHaveBeenCalledWith("testuser", "password123");
};
