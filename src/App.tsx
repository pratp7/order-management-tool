import React from 'react';
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import LoginPage from './views/login-page';
import Orderpage from './views/orders-page';
import {Routes, Route, Navigate} from 'react-router-dom'
import PrivateRoutes from './utils/private-route';


function App() {
  
  return (
    <div className='app-layout'>
      <Header/>
      <section className='route-section'>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route element={<PrivateRoutes/>}>
          <Route path='/dashboard' element={<Orderpage/>}/>
          <Route path="*" element={<Navigate to='/dashboard' replace />}/>
        </Route>
         
        </Routes>
      </section>
     <Footer/>
    </div>
  );
}

export default App;
