import React, { useState } from 'react';

const CreateAccount: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your create account logic here
    alert(`Account created for: ${firstName} ${lastName} (${email})`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#22223b] via-[#1a1a2e] to-[#0f3460]">
      <div className="group relative w-full max-w-2xl flex flex-col items-center">
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-10 animate-glow group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-opacity duration-300" style={{background: 'conic-gradient(from 0deg, #00f0ff, #7c3aed, #00f0ff 100%)', filter: 'blur(6px)'}}></div>
        <div className="bg-[#181a20] backdrop-blur-md py-8 px-20 rounded-2xl shadow-2xl w-full flex flex-col items-center border border-white/10 z-20">
          <h1 className="text-3xl font-extrabold mb-2 text-white tracking-tight drop-shadow-lg">Create Account</h1>
          <p className="text-gray-300 text-center mb-6 text-sm">By creating an account, you may receive newsletters or promotions.</p>
          <form onSubmit={handleCreateAccount} className="w-full flex flex-col space-y-4 mt-2">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone Number (optional)"
              value={phone}
              onChange={e => setPhone(e.target.value)}
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
              Create Account
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4 italic">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount; 