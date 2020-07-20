import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";

// Google Analytics HOC Technique
import withPageView from "./views/Utils/withPageView";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #20a8d8;
`;

const loading = () => (
  <div
    style={{ margin: 0 + "auto" }}
    className="animated fadeIn pt-3 text-center"
  >
    <ClipLoader css={override} size={20} color={"#20A8D8"} /> Sedang Memuat...
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
// const Page500 = React.lazy(() => import("./views/Pages/Page500"));
const Unauthorized = React.lazy(() =>
  import("./views/Pages/Unauthorized/Unauthorized")
);

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/admin/login"
              name="login"
              render={(props) => <Login {...props} />}
              component={withPageView(Login)}
            />
            <Route
              path="/admin/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
              component={withPageView(Page404)}
            />
            <Route
              path="/admin/unauthorized"
              name="Unauthorized"
              render={(props) => <Unauthorized {...props} />}
              component={withPageView(Unauthorized)}
            />
            <Route
              path="/admin/"
              name="Beranda"
              render={(props) => <DefaultLayout {...props} />}
              component={withPageView(DefaultLayout)}
            />
            <Redirect to="/admin/404" />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
