import React, { useState } from 'react';

const positions = [
  'Senior Full Stack Developer',
  'DevOps Engineer',
  'UI/UX Designer',
  'Data Scientist',
];

const Apply = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.position || !form.resume) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center py-12 px-4">
      <div className="group relative w-full max-w-lg flex flex-col items-center">
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-10 animate-glow group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-opacity duration-300" style={{background: 'conic-gradient(from 0deg, #00f0ff, #7c3aed, #00f0ff 100%)', filter: 'blur(6px)'}}></div>
        <div className="bg-[#181a20]/90 backdrop-blur-md py-10 px-8 md:px-12 rounded-2xl shadow-2xl w-full flex flex-col items-center border border-white/10 z-20">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">Job Application</h1>
        {submitted ? (
          <div className="text-center text-green-400 font-semibold text-lg py-8">
            Thank you for applying! We will review your application and get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-700 bg-[#23243a]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-700 bg-[#23243a]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-700 bg-[#23243a]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Position *</label>
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-700 bg-[#23243a]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                required
              >
                <option value="">Select a position</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Resume (PDF/DOC) *</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-700 bg-[#23243a]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 file:bg-blue-700 file:text-white file:rounded file:px-4 file:py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-700 bg-[#23243a]/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                rows={4}
                placeholder="Tell us why you're a great fit!"
              />
            </div>
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white font-bold rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 tracking-wide"
            >
              Submit Application
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};

export default Apply; 