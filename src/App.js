import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import NewsSinglePost from "./pages/NewsSinglePost";
import Gallery from "./pages/Gallery";
import ServicesInside from "./pages/ServicesInside";
import page404 from "./pages/404";
import UserInterface from "./pages/UserInterface";
import LanguageRouter from "./components/LanguageRouter";
import Departments from "./pages/Departments";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Switch>
        {/* Redirect / to default language */}
        <Route exact path="/">
          <Redirect to="/hy" />
        </Route>

        {/* Language-prefixed routes */}
        <Route
          path="/:lng"
          render={({ match: { path } }) => (
            <LanguageRouter>
              <Switch>
                <Route exact path={`${path}/`} component={Home} />
                <Route exact path={`${path}/about-us`} component={About} />
                <Route exact path={`${path}/contacts`} component={Contacts} />
                <Route exact path={`${path}/news`} component={News} />
                <Route exact path={`${path}/gallery`} component={Gallery} />
                <Route exact path={`${path}/team`} component={Team} />
                <Route
                  exact
                  path={`${path}/news/:id`}
                  component={NewsSinglePost}
                />
                <Route
                  exact
                  path={`${path}/departments`}
                  component={Departments}
                />
                <Route
                  exact
                  path={`${path}/departments/:id`}
                  component={ServicesInside}
                />
                <Route exact path={`${path}/ui`} component={UserInterface} />
                <Route component={page404} />
              </Switch>
            </LanguageRouter>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
