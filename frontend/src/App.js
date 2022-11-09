import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import DefaultHome from './Components/Home/HomePage/DefaultHome';
import Theatre from './Components/Theatre/Theatre';
import Header from './Components/Home/HomePage/Header';
import Footer from './Components/Home/HomePage/Footer';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>

        <Route exact path='/home' element={<DefaultHome />} /> 
        

        <Route exact path='/theatre' element={<Theatre/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
