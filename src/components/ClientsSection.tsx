import React, { useState, useEffect } from 'react';

export const ClientsSection = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const clients = [
    { name: "LendingKart", logo: "https://logo.clearbit.com/lendingkart.com" },
    { name: "Freshworks", logo: "/freshworks.png" },
    { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
    { name: "Bosch", logo: "https://logo.clearbit.com/bosch.com" },
    { name: "pixelsoft", logo: "/pixelsoft_tech.jpg" },
    { name: "ClearDekho", logo: "https://logo.clearbit.com/cleardekho.com" },
    { name: "Park+", logo: "https://logo.clearbit.com/parkplus.io" },
    { name: "Trell", logo: "https://logo.clearbit.com/trell.co" },
    { name: "TrueMeds", logo: "https://logo.clearbit.com/truemeds.in" },
    { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
    { name: "DotPe", logo: "https://logo.clearbit.com/dotpe.in" },
    { name: "Khatabook", logo: "https://logo.clearbit.com/khatabook.com" },
    { name: "Shiprocket", logo: "https://logo.clearbit.com/shiprocket.in" },
    { name: "Ericsson", logo: "https://logo.clearbit.com/ericsson.com" },
    { name: "MindInventory", logo: "https://logo.clearbit.com/mindinventory.com" },
    { name: "Velotio", logo: "https://logo.clearbit.com/velotio.com" },
    { name: "Ziffity", logo: "https://logo.clearbit.com/ziffity.com" },
    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "CleverTap", logo: "https://logo.clearbit.com/clevertap.com" },
    { name: "Keka", logo: "https://logo.clearbit.com/keka.com" },
    { name: "Fyle", logo: "https://logo.clearbit.com/fylehq.com" },
    { name: "Codewave", logo: "https://logo.clearbit.com/codewave.com" },
    { name: "Tvisha Technologies", logo: "https://logo.clearbit.com/tvishatech.com" },
    { name: "Prompt Softech", logo: "https://logo.clearbit.com/promptsoftech.com" },
    { name: "Chargebee", logo: "https://logo.clearbit.com/chargebee.com" },
    { name: "Octal IT Solution", logo: "https://logo.clearbit.com/octalsoftware.com" },
    { name: "Techuz", logo: "https://logo.clearbit.com/techuz.com" },
    { name: "AasaanJobs", logo: "https://logo.clearbit.com/aasaanjobs.com" },
    { name: "Happay", logo: "https://logo.clearbit.com/happay.com" },
    { name: "AgroStar", logo: "https://logo.clearbit.com/agrostar.in" },
    { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
    { name: "NowFloats", logo: "https://logo.clearbit.com/nowfloats.com" },
  ];

  // Split clients into sets of 16 (since we removed 4 clients)
  const clientSets = [
    clients.slice(0, 16),  // First 16
    clients.slice(16)      // Next 16
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % clientSets.length);
        setIsFlipping(false);
      }, 600); // Half of flip duration
    }, 3000); // 3 seconds per set

    return () => clearInterval(interval);
  }, [clientSets.length]);

  const currentClients = clientSets[currentSet];

  return (
    <section className="py-4 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2
            className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-300 mb-2 md:mb-4 tracking-tight leading-tight relative z-10"
            style={{ fontFamily: 'Poppins, Arial, sans-serif' }}
          >
            Our Clients
          </h2>
          <div className="w-12 md:w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-3 md:mb-8 rounded-full relative z-10"></div>
          <p className="text-xs md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed relative z-10">
            Trusted by industry leaders and innovative companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-6 lg:gap-8">
          {currentClients.map((client, index) => (
            <div className="flex justify-center items-center">
              <div
                key={`${currentSet}-${client.name}`}
                className="group relative perspective-1000"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transitionDelay: isFlipping ? '0ms' : `${index * 30}ms`
                }}
              >
                <div className={`relative transition-transform duration-1200 transform-style-preserve-3d ${
                  isFlipping ? 'rotate-y-180' : 'rotate-y-0'
                }`}>
                  {/* Mobile: small, square card */}
                  <div className="block md:hidden w-20 h-20 aspect-square">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-700 p-1 border border-white/20 flex flex-col relative z-10 w-full h-full">
                      <div className="relative overflow-hidden rounded-lg flex-1 flex items-center justify-center bg-white">
                        <img
                          src={client.name === 'Deloitte' ? '/Deloitte.png' : client.logo}
                          alt={client.name}
                          className={`w-16 h-16 min-w-[70%] min-h-[70%] object-contain`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'w-full h-full flex items-center justify-center text-white font-bold text-xs text-center px-2';
                              fallback.textContent = client.name;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                      {/* Floating name on hover */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                        <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                          {client.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Desktop: flexible card */}
                  <div className="hidden md:flex flex-col relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 p-3 border border-white/20 hover:border-purple-400/50 group-hover:scale-110 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-xl flex-1 flex items-center justify-center bg-white">
                      <img
                        src={client.name === 'Deloitte' ? '/Deloitte.png' : client.logo}
                        alt={client.name}
                        className={`w-full h-full min-w-[70%] min-h-[70%] object-contain max-h-20 lg:max-h-24 xl:max-h-28`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'w-full h-full flex items-center justify-center text-white font-bold text-sm text-center px-2';
                            fallback.textContent = client.name;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    {/* Floating name on hover */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                        {client.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 space-x-2 relative z-10">
          {clientSets.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentSet 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .duration-1200 {
          transition-duration: 1200ms;
        }
      `}</style>
    </section>
  );
};
