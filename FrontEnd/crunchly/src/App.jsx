import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';

function App(){
    return(
        <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute auth={{ isAuthenticated: true }} ><Home /></PrivateRoute>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>)
};

export default App;