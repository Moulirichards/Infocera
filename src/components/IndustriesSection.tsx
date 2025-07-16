const industries = [
  { name: 'Automotive' },
  { name: 'Ecommerce' },
  { name: 'Education' },
  { name: 'Finance' },
  { name: 'Gaming' },
  { name: 'Healthcare' },
  { name: 'Manufacturing' },
  { name: 'Real Estate' },
  { name: 'Retail' },
  { name: 'Logistics' },
];

export const IndustriesSection = () => (
  <section className="py-20 bg-[linear-gradient(to_right,_#0a223a,_#0154b4)] text-white">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 mb-3 tracking-tight leading-tight"
          style={{ fontFamily: 'Exo, Arial, sans-serif' }}
        >
          Industries We Serve
        </h2>
        <div className="w-16 h-1 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400" />
        <p className="text-base md:text-xl text-white/80 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
          We deliver tailored solutions for a wide range of industries, helping businesses innovate and grow.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 justify-center">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="block bg-white/10 border border-white/60 rounded-xl p-3 md:p-6 text-center shadow-sm text-xs md:text-lg font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/20 hover:shadow-lg"
          >
            {industry.name}
          </div>
        ))}
      </div>
    </div>
  </section>
); 