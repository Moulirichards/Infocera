import { useNavigate } from 'react-router-dom';
<div className="min-h-screen service-page"> 
    {/* Hero Section */}
    <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-blue-300 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Email Marketing</h1>
          <p className="text-xl mb-8">Reach your customers directly with personalized, high-converting email campaigns that grow your business.</p>
          <div className="flex flex-row items-center md:block">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow hover:bg-blue-100 transition-all duration-300" onClick={() => navigate('/contact')}>Start Email Campaign</button>
            <span className="inline-block ml-2 md:hidden">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
                <path d="M4 8l8 6 8-6" stroke="#fff" strokeWidth="2"/>
                <rect x="4" y="8" width="16" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="relative justify-center hidden md:flex">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
            <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.15" />
            <path d="M4 8l8 6 8-6" stroke="#fff" strokeWidth="2"/>
            <rect x="4" y="8" width="16" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </section>
</div> 