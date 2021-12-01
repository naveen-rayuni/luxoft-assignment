import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Login from "./components/login";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/all">
          <RecordList />
        </Route>
        <Route path="/profile/:id" component={Profile} />
      </div>
    </div>
  );
};

export default App;