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
import Payment from './Components/Payment/Payment';
import Booking from './Components/Booking/Booking';
import Wallet from './Components/Wallet/Wallet';
import SeatList from './Components/Audi/Seat-List';
import History from './Components/Home/History/History';
import UserDetails from './Components/Home/HomePage/UserDetails';


function App() {
  return (
    <div>

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
                <Route path ="/payment" element={<Payment/>}/>
                <Route path ="/booking" element={<Booking/>}/>
                <Route path ="/wallet" element={<Wallet/>}/>
                <Route path ="/seat" element={<SeatList/>}/>
                <Route path ="/history" element={<History/>}/>
                <Route path ="/userDetails" element={<UserDetails/>}/>
              </Routes>
            </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
