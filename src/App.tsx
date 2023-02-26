import React from 'react';
import Header from '@/components/header/Header';
import Router from './Router';
import Footer from '@/components/Footer';
import UserContextProvider from '@/contexts/UserContextProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Router />
        <Footer />
        <ToastContainer />
      </UserContextProvider>
    </div>
  );
}

export default App;
