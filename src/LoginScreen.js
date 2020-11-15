import {
  Container,
  FormControl,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { auth, firebase } from "./firebase";
import "./LoginScreen.css";
import { useStateValue } from "./StateProvider";
function LoginScreen() {
  const [usernumber, setUsernumber] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState("");
  const history = useHistory();
  const [{ logged }, dispatch] = useStateValue();
  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth.signInWithPhoneNumber(
      usernumber,
      new firebase.auth.RecaptchaVerifier("sign-in-button", {
        size: "invisible",
        callback: (res) => {
          return res;
        },
      })
    );
    setConfirm(confirmation);
  }
  async function confirmCode() {
    try {
      await confirm.confirm(code);
      history.replace("/");
      dispatch({
        type: "LOGIN",
        logged: true,
      });
    } catch (error) {
      alert("Invalid code.");
    }
  }
  if (logged) {
    return <Redirect to="/" />;
  }
  return (
    <Container className="LoginPage">
      <FormControl>
        {!confirm && (
          <>
            <Input
              value={usernumber}
              onChange={(e) => setUsernumber(e.target.value)}
              placeholder={"Phone number"}
              type="tel"
              inputMode="tel"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your pone number. Ex. +966557.....
            </FormHelperText>
            <Button
              variant="outlined"
              style={{ marginTop: 5 }}
              id="sign-in-button"
              type="submit"
              onClick={signInWithPhoneNumber}
            >
              Sign In
            </Button>
            {/* <Button
              variant="outlined"
              style={{ marginTop: 5 }}
              onClick={() => history.push("/register")}
            >
              Create New Account ...
            </Button> */}
          </>
        )}
        {confirm && (
          <>
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="number"
              inputMode="numeric"
              placeholder={"Verification Code"}
            />
            <FormHelperText id="my-helper-text">OTP code.</FormHelperText>
            <Button type="submit" onClick={confirmCode}>
              Login
            </Button>
          </>
        )}
      </FormControl>
    </Container>
  );
}
export default LoginScreen;
