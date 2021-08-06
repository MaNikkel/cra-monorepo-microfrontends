
import { Button } from '@cmm/components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Button onClick={() => console.log('hello monorepo')}>Home</Button>
          </div>
        </Route>
        <Route path="/about">
          <div className="App">
            <div>About</div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
