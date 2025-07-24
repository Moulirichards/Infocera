import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your reset logic here
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
      <div className="bg-white/80 backdrop-blur-md py-8 px-20 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col items-center border border-white/30 z-10">
        <h1 className="text-3xl font-extrabold mb-2 text-gray-800 tracking-tight drop-shadow-lg">Forgot Password</h1>
        <p className="text-gray-500 text-center mb-6 text-sm">Enter your email address, and we’ll send you a password reset link.</p>
        <form onSubmit={handleReset} className="w-full flex flex-col space-y-4 mt-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-xl tracking-wide"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-6 w-full flex flex-col items-center">
          <span className="text-gray-500 mb-2">Don't need to reset your password?</span>
          <Link
            to="/login"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:scale-105 transition-all duration-200 shadow"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 