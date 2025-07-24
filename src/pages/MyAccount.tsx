import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccount: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-in logic here
    alert(`Sign in with: ${email}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
      <div className="bg-white/80 backdrop-blur-md py-8 px-20 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col items-center border border-white/30 z-10">
        <h1 className="text-3xl font-extrabold mb-2 text-gray-800 tracking-tight drop-shadow-lg">Sign In</h1>
        <p className="text-gray-500 text-center mb-6 text-sm">Sign in to your account to access your profile, history, and any private pages you've been granted access to.</p>
        <form onSubmit={handleSignIn} className="w-full flex flex-col space-y-4 mt-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-xl tracking-wide"
          >
            Sign In
          </button>
          <div className="w-full flex justify-center mt-2">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
          </div>
        </form>
        <div className="mt-6 w-full flex flex-col items-center">
          <span className="text-gray-500 mb-2">Don't have an account?</span>
          <Link
            to="/create-account"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:scale-105 transition-all duration-200 shadow"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAccount; 