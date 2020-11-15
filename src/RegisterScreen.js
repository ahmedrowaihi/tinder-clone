import { Button, Container, FormControl, Input } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./firebase";

import { useStateValue } from "./StateProvider";
function RegisterScreen() {
  const [{ logged }] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  if (logged) {
    return <Redirect to="/" />;
  }
  const handleCreate = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((res) => setErr(res.message));
  };
  return (
    <Container className="LoginPage">
      <FormControl>
        <label>Email</label>
        <Input
          value={email}
          placeholder={"email"}
          type="email"
          inputMode="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <label>Password</label>
        <Input
          placeholder={"Password"}
          value={password}
          type="Password"
          inputMode="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button type="submit" onClick={handleCreate}>
          CreateAccount
        </Button>
        <label style={{ color: "red" }}>{err}</label>
      </FormControl>
    </Container>
  );
}

export default RegisterScreen;
