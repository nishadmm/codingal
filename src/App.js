import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Posts from "./components/posts/Posts";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
};

export default App;
