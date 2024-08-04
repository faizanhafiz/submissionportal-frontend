 
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Signup/>}/>
         
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={(<h2>Not Found</h2>)} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
