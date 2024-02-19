import {Route, Routes } from 'react-router-dom'

import Login from '../src/pages/Login.jsx'
import Register from '../src/pages/Register.jsx'

export default function App() {

  return (
    <>
     <Routes>    
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
     </Routes>
    </>
  );
}
