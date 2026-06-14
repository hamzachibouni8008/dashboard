import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Home name="John" />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
