import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Infocera offer?',
    answer: 'Infocera provides IT services including web development, mobile apps, AI/ML, cloud solutions, consulting, and more.'
  },
  {
    question: 'Where is Infocera located?',
    answer: 'First Floor, L29-L34, Block L, Connaught Place, New Delhi, Delhi - 110001.'
  },
  {
    question: 'How can I contact Infocera?',
    answer: 'You can call us at +91 8815587953 or email info@infocera.in.'
  },
  {
    question: 'Does Infocera provide technical support?',
    answer: 'Yes, we offer technical support for all our products and services.'
  },
  {
    question: 'How do I apply for a job at Infocera?',
    answer: 'Visit our Careers page to see open positions and apply online.'
  },
];

function findRelevantAnswer(userQuestion) {
  const normalized = userQuestion.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;
  for (const faq of faqs) {
    const q = faq.question.toLowerCase();
    // Score: +2 if the FAQ question is a substring, +1 for each keyword match
    let score = 0;
    if (normalized.includes(q)) score += 2;
    const keywords = q.split(/\W+/).filter(Boolean);
    for (const word of keywords) {
      if (normalized.includes(word)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq.answer;
    }
  }
  // Only return if score is at least 2 (to avoid false positives)
  return bestScore >= 2 ? bestMatch : null;
}

export const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am your AI assistant. You can select a FAQ or type your question below.' }
  ]);
  const [showFaqs, setShowFaqs] = useState(true);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;
    setMessages(msgs => [...msgs, { from: 'user', text: question }]);
    setInput('');
    setShowFaqs(false);
    setTimeout(() => {
      const answer = findRelevantAnswer(question);
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: answer || 'Thank you for your question! We will get back to you shortly.' }
      ]);
    }, 500);
  };

  const handleFaqClick = (faq) => {
    setMessages(msgs => [
      ...msgs,
      { from: 'user', text: faq.question },
      { from: 'bot', text: faq.answer }
    ]);
    setShowFaqs(false);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => {
          setOpen((o) => !o);
          if (!open) setShowFaqs(true);
        }}
        className="fixed z-50 bottom-6 right-6 bg-brand-primary hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 focus:outline-none"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
        aria-label="Open AI Chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed z-50 bottom-24 right-6 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border border-blue-200 overflow-hidden animate-fade-in flex flex-col" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.22)' }}>
          <div className="bg-brand-primary text-white px-4 py-3 font-bold text-lg flex items-center justify-between">
            <span>AI Chat Assistant</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-blue-200 text-2xl font-bold focus:outline-none">&times;</button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto" style={{ maxHeight: '320px' }}>
            <div className="space-y-2">
              {messages.map((msg, idx) => (
                <div key={idx} className={msg.from === 'bot' ? 'text-left' : 'text-right'}>
                  <span className={
                    msg.from === 'bot'
                      ? 'inline-block bg-blue-50 text-blue-900 rounded-lg px-3 py-2 mb-1 max-w-[90%]'
                      : 'inline-block bg-brand-primary text-white rounded-lg px-3 py-2 mb-1 max-w-[90%]'
                  }>
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {showFaqs && (
              <ul className="space-y-3 mt-4">
                {faqs.map((faq, idx) => (
                  <li key={idx}>
                    <button
                      className="w-full text-left bg-blue-50 hover:bg-blue-100 rounded-lg px-3 py-2 font-medium text-blue-900 transition"
                      onClick={() => handleFaqClick(faq)}
                    >
                      {faq.question}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {!showFaqs && (
              <div className="flex justify-center mt-2">
                <button
                  className="text-xs text-brand-primary hover:underline"
                  onClick={() => setShowFaqs(true)}
                >
                  Show FAQs
                </button>
              </div>
            )}
          </div>
          <form onSubmit={handleSend} className="flex border-t border-blue-100 bg-blue-50 p-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-l-lg border-none focus:ring-2 focus:ring-brand-primary text-gray-900 bg-white"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus={open}
            />
            <button
              type="submit"
              className="bg-brand-primary hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg font-semibold transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot; 