import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
