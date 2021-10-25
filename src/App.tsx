import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingLayout from "./components/layouts/LandingLayout";
import { Home } from "./pages";

const App = () => (
  <LandingLayout>
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </LandingLayout>
);

export default App;
