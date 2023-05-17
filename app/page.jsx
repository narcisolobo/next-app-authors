'use client';

import { Fragment, useState } from 'react';
import Login from './components/login-reg/Login';
import Register from './components/login-reg/Register';
import toast, { Toaster } from 'react-hot-toast';

function HomePage() {
  const [isLogin, setIsLogin] = useState(true);
  const success = () =>
    toast.success('Thank you for registering! Please log in.');

  return (
    <div className="flex justify-center mt-6">
      <Toaster />
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} success={success} />
      )}
    </div>
  );
}

export default HomePage;
