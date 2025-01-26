import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Estado para habilitar/deshabilitar el botón de login
  const isButtonDisabled = !(username && password);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Input
          placeholder="Username"
          value={username}
          onChange={setUsername}
          className={styles.input}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={setPassword}
          isPassword
          className={styles.input}
        />
        <Button
          label="Login"
          onClick={() => onLogin(username, password)}
          disabled={isButtonDisabled}
          className={styles.button}
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  /** Callback to handle login action */
  onLogin: PropTypes.func.isRequired,
};
