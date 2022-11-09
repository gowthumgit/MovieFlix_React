import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import DefaultHome from './Components/Home/HomePage/DefaultHome';
import Footer from './Components/Home/HomePage/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import PhoneSignUp from './Components/PhoneSignUp';
function App() {
  return (
    <div className="App">
      <Container >
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
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
