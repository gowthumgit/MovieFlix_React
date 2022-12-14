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
import Admin from './Components/Admin/Admin';
import CrudTable from './Components/CrudTable';
import CrudDetails from './Components/Admin/AdminMovies/CrudDetails';
import CrudAdd from './Components/Admin/AdminMovies/CrudAdd';
import UserGridView from './Components/Admin/AdminUsers/UserGridView';
import UserDetailsAdmin from './Components/Admin/AdminUsers/UserDetailsAdmin';
import CrudEdit from './Components/Admin/AdminMovies/CrudEdit';
import AdminLogin from './Components/Admin/AdminLogin';


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
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/phonesignup" element={<PhoneSignUp />} />
                <Route path ="/theatre" element={<Theatre/>}/>
                <Route path ="/payment" element={<Payment/>}/>
                <Route path ="/booking" element={<Booking/>}/>
                <Route path ="/wallet" element={<Wallet/>}/>
                <Route path ="/seat" element={<SeatList/>}/>
                <Route path ="/history" element={<History/>}/>
                <Route path ="/userDetails" element={<UserDetails/>}/>
                <Route path="/movies" element={<CrudTable />} />
                <Route path="/movies/:id" element={<CrudDetails />} />
                <Route path="/movies/edit/:id" element={<CrudEdit />} />
                {<Route path="/movies/add" element={<CrudAdd />} />}
                <Route path="/users" element={<UserGridView />} />
                <Route path="/users/:id" element={<UserDetailsAdmin />} />
              </Routes>
            </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
