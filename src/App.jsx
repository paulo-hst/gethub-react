import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Content from './components/layout/Content/Content';

function App() {
  return (
    <div className="App">
      <Router>
        <Content></Content>
      </Router>
    </div>
  );
}

export default App;
