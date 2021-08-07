
import { Button } from '@cmm/components'
import {
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/app2">
        <div className="App">
          <Link to="/">App1</Link>
          <Button onClick={() => console.log('hello monorepo')}>Home 2</Button>
        </div>
      </Route>
      <Route path="/app2/about">
        <div className="App">
          <div>About 2 teste 2</div>
        </div>
      </Route>
    </>
  );
}

export default App;
