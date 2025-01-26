import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";

describe("Login Component", () => {
  test("renders inputs and login button", () => {
    render(<Login onLogin={jest.fn()} />);
    
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("disables login button if inputs are empty", () => {
    render(<Login onLogin={jest.fn()} />);

    const button = screen.getByText("Login");
    expect(button).toBeDisabled();
  });

  test("enables login button when inputs have values", () => {
    render(<Login onLogin={jest.fn()} />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const button = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(button).not.toBeDisabled();
  });

  test("calls onLogin with username and password", () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const button = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(button);

    expect(mockOnLogin).toHaveBeenCalledWith("testuser", "password123");
  });
});
