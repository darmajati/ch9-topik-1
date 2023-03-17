import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact';
import About from './pages/About'
import NotFound from './pages/NotFound';
import CreateUser from './pages/CreateUser'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/create-user" element={<CreateUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <Home />
    //     {/* <Calculator /> */}
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
