import './App.css';
import { Routes,Route } from 'react-router-dom';
import DefaultHome from './Components/Home/HomePage/DefaultHome';
import Theatre from './Components/Theatre/Theatre';
import Footer from './Components/Home/HomePage/Footer';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import PhoneSignUp from './Components/PhoneSignUp';
import Wallet from './Components/Wallet/Wallet';
import SeatList from './Components/Audi/Seat-List';
function App() {
  return (
    <div className="App">

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
                <Route path ="/seat" element={<SeatList/>}/>
              </Routes>
            </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
