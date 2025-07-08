import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .login-box {
    position: relative;
    width: 100%;
    padding: 40px;
    background: rgba(0,0,0,.9);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
  }

  .login-box p:first-child {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .login-box .user-box {
    position: relative;
    margin-bottom: 30px;
  }
  .login-box .user-box input[name="phone"] ~ label {
    /* no change to label */
  }
  .login-box .user-box input[name="phone"] {
    /* no change to input */
  }
  /* Reduce gap after phone number only */
  .login-box .user-box:last-of-type {
    margin-bottom: 0;
  }
  .login-box .user-box:nth-child(5) {
    margin-bottom: 8px;
  }

  .login-box .user-box input,
  .login-box .user-box textarea {
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    resize: none;
    min-height: 40px;
    box-sizing: border-box;
  }

  .login-box .user-box textarea {
    min-height: 120px;
    display: block;
  }

  .login-box .user-box label {
    position: absolute;
    left: 0;
    bottom: 5px;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
    padding: 0;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label,
  .login-box .user-box textarea:focus ~ label,
  .login-box .user-box textarea:valid ~ label {
    top: -20px;
    left: 0;
    color: #fff;
    font-size: 12px;
    bottom: auto;
  }

  .login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 3px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .login-box a:hover {
    background: #fff;
    color: #272727;
    border-radius: 5px;
  }

  .login-box a span {
    position: absolute;
    display: block;
  }

  .login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fff);
    animation: btn-anim1 1.5s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }

    50%,100% {
      left: 100%;
    }
  }

  .login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #fff);
    animation: btn-anim2 1.5s linear infinite;
    animation-delay: .375s
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }

    50%,100% {
      top: 100%;
    }
  }

  .login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #fff);
    animation: btn-anim3 1.5s linear infinite;
    animation-delay: .75s
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }

    50%,100% {
      right: 100%;
    }
  }

  .login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #fff);
    animation: btn-anim4 1.5s linear infinite;
    animation-delay: 1.125s
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }

    50%,100% {
      bottom: 100%;
    }
  }

  .login-box p:last-child {
    color: #aaa;
    font-size: 14px;
  }

  .login-box a.a2 {
    color: #fff;
    text-decoration: none;
  }

  .login-box a.a2:hover {
    background: transparent;
    color: #aaa;
    border-radius: 5px;
  }
`;

const StyledForm = () => {
  return (
    <StyledWrapper>
      <div className="login-box">
        <p style={{ color: '#2563eb' }}>Get Started Today</p>
        <form>
          <div className="user-box">
            <input required name="firstName" type="text" />
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input required name="lastName" type="text" />
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input required name="email" type="email" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required name="phone" type="tel" />
            <label>Phone Number</label>
          </div>
          <div className="user-box">
            <textarea required name="message" rows={4} />
            <label>Tell us about your project</label>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span />
            <span />
            <span />
            <span />
            Send Message
          </a>
        </form>
      </div>
    </StyledWrapper>
  );
}

export const ContactCTA = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Preload the background image as soon as the component mounts
  useEffect(() => {
    const img = new window.Image();
    img.src = '/transformbg.webp';
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-0 flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background elements (same as ClientsSection) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-6" style={{ fontFamily: 'Exo, Arial, sans-serif', color: '#fff' }}>Ready to Transform Your Business?</h2>
            <p className="text-base md:text-xl text-blue-100 mb-4 md:mb-8">
              Let's discuss how our innovative IT solutions can drive your business forward. 
              Get in touch with our experts today.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold">Call Us</p>
                  <p className="text-xs md:text-sm text-blue-200">+91 8815587953</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold">Email Us</p>
                  <p className="text-xs md:text-sm text-blue-200">info@infocera.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold">Visit Us</p>
                  <p className="text-xs md:text-sm text-blue-200">8th Floor, HB Twin Tower<br />Netaji Subhash Place, Pitampura<br />NEW DELHI - 110034</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <StyledForm />
          </div>
        </div>
      </div>
    </section>
  );
};
