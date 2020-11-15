import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import { Chats } from "./Chats";
import ChatScreen from "./ChatScreen";
import LoginScreen from "./LoginScreen.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import SetNameComp from "./SetNameComp";

function App() {
  const [{ logged, user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: "LOGIN",
          logged: authUser,
          user: Object.assign({ displayName: auth.currentUser.displayName }),
        });
      } else {
        // the use is logged out...
        dispatch({
          type: "LOGOUT",
          logged: null,
          user: Object.assign({}),
        });
      }
    });
    return () => {
      //Any cleanup operations go in here...
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path={"/register"}>
            <Header backButton="/login" />
            <RegisterScreen />
          </Route> */}
          <Route path={"/login"}>
            <Header backButton="/" />
            <LoginScreen />
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            {logged && !user?.displayName && <SetNameComp />}
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
