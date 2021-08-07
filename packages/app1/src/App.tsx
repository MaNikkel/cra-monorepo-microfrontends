
import { Button } from '@cmm/components'
import {
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/">
          <Link to="/app2" style={ { display: "block"} }>App2</Link>
          <Link to="/about" style={ { display: "block"} }>about</Link>
          <Button onClick={() => console.log('hello monorepo')}>Home</Button>
      </Route>
      <Route path="/about">
          <Link to="/app2/about" style={ { display: "block"} }>about</Link>
          <div>About teste 2</div>
      </Route>
    </>
  );
}

export default App;
