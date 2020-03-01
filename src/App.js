import React, { Component } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Auth from "./components/Auth/Auth";
import Registration from "./components/Registration/Registration";
import Profile from "./pages/Profile/Profile";
import { Route, Switch } from "react-router-dom";
import { ProfileState } from "./context/profile/ProfileState";

class App extends Component {
  render() {
    return (
      <ProfileState>
        <Header />
        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="/profile" component={Profile} />
          <Route path="/registration" component={Registration} />
          <Route path="/login/acounts" component={Auth} />
        </Switch>
      </ProfileState>
    );
  }
}

export default App;
