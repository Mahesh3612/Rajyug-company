
import './App.css';
import Admin from './components/Admin';
import { Login } from './components/AdminLogin';
import Booking from './components/Booking';
import { Route, Routes, Link } from 'react-router-dom';
import { PatientDetail } from './components/PatientDetail';



function App() {
  return (
    
    <div className="App">
      <div className="App">
    
</div>
      


      <Routes>
        <Route path='/user' element={<Booking />} />
        <Route path='/admin-log' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/view/:id' element={<Admin/>}/>
      </Routes>


    </div>
  );
}

export default App;
