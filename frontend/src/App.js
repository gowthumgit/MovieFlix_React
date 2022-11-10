import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import DefaultHome from './Components/Home/HomePage/DefaultHome';
import Theatre from './Components/Theatre/Theatre';
import Header from './Components/Home/HomePage/Header';
import Footer from './Components/Home/HomePage/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import PhoneSignUp from './Components/PhoneSignUp';
import Wallet from './Components/Wallet/Wallet';
function App() {
  return (
    <div className="App">
      
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                  <ProtectedRoute>
                    <DefaultHome />
                  </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/phonesignup" element={<PhoneSignUp />} />
                <Route path ="/theatre" element={<Theatre/>}/>
                <Route path ="/wallet" element={<Wallet/>}/>
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      
      <Footer />
    </div>
  );
}

export default App;
