import React from 'react';
import App1 from '@cmm/app1'
import App2 from '@cmm/app2'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <App1 />
      <App2 />
    </BrowserRouter>
  );
}

export default App;
