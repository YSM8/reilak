import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { Aside } from "../components/ui/Aside";
import { Navbar } from "../components/ui/Navbar";

export const DashbordRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="main__content">
        <Aside />
        
          <Switch>
            <Route exact path="/home" component={HomeScreen} />

            <Redirect to="/home" />
          </Switch>
        
      </div>
    </div>
  );
};
