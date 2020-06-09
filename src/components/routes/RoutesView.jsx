import React from "react";
import { Switch, Route } from "react-router-dom";
import { AllCampusesContainer, CampusContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllCampusesContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/:id" component={CampusContainer} />
    </Switch>
  );
};

export default RoutesView;
