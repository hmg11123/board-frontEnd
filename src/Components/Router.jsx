import React from "react";
import withSplitting from "../Lib/withSplitting";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { withResizeDetector } from "react-resize-detector";

const MM00 = withSplitting(() => import("../Routes/Client/MM00"));
const MM00_D = withSplitting(() =>
 import("../Routes/Client/MM00/MM00_D/MM00_D")
);

const AppRouter = ({ width }) => {
 return (
  <Router>
   <Route exact path="/" component={MM00} />
   <Route exact path="/notice-detail/:key" component={MM00_D} />
  </Router>
 );
};

export default withResizeDetector(AppRouter);
