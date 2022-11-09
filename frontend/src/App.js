import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import DefaultHome from './Components/Home/HomePage/DefaultHome';
import Footer from './Components/Home/HomePage/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/home' element={<DefaultHome />} /> 

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
