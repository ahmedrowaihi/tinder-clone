import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackButton from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Header({ backButton }) {
  const history = useHistory();
  const [{ logged }, dispatch] = useStateValue();
  const login = () => {
    if (logged) {
      auth.signOut();
      dispatch({ type: "LOGOUT" });
    }
  };
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackButton className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton
          onDoubleClick={() => login()}
          onClick={() => !logged && history.push("/login")}
        >
          <PersonIcon
            style={{ color: !logged ? "red" : "green" }}
            className="header__icon"
            fontSize="large"
          />
        </IconButton>
      )}

      <Link to="/" onClick={() => auth.signOut()}>
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder-logo"
        />
      </Link>

      <Link to={logged ? "/chat" : "/"}>
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
