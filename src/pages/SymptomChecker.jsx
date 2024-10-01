import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPaperPlane, FaBars } from 'react-icons/fa';
import { checkSymptoms } from '../utils/api';
import MobileNavbar from '../components/MobileNavbar';
import Navbar from '../components/Navbar';

const SymptomChecker = () => {
  const location = useLocation();
  const initialSymptom = location.state?.initialSymptom || '';
  const [input, setInput] = useState(initialSymptom);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Load messages from localStorage and ensure message.content is a string
  useEffect(() => {
    const storedMessages = localStorage.getItem('symptomCheckerMessages');
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages).map((msg) => {
          if (typeof msg.content === 'object' && msg.content.guidance) {
            return { ...msg, content: msg.content.guidance };
          }
          return msg;
        });
        setMessages(parsedMessages);
      } catch (error) {
        console.error('Error parsing stored messages:', error);
        // Clear corrupted messages
        localStorage.removeItem('symptomCheckerMessages');
      }
    }
  }, []);

  // If there's an initial symptom passed via navigation, submit it automatically
  useEffect(() => {
    if (initialSymptom) {
      handleSubmit({ preventDefault: () => {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await checkSymptoms(input);
      // Ensure that response.guidance is a string
      const guidance = typeof response.guidance === 'string' ? response.guidance : '';
      const aiMessage = { type: 'ai', content: guidance };
      const newMessages = [...updatedMessages, aiMessage];
      setMessages(newMessages);
      // Update localStorage with the new messages
      localStorage.setItem('symptomCheckerMessages', JSON.stringify(newMessages));
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        type: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      const newMessages = [...updatedMessages, errorMessage];
      setMessages(newMessages);
      // Update localStorage with the error message
      localStorage.setItem('symptomCheckerMessages', JSON.stringify(newMessages));
    }

    setIsLoading(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileNavbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <main className="flex-1 flex flex-col bg-gradient-to-br from-yellow-900 to-yellow-200 md:ml-64">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="md:hidden mb-4">
              <button onClick={toggleNavbar} className="text-deepBlue">
                <FaBars size={24} />
              </button>
            </div>
            <div className="space-y-4 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-yellow-600 text-black backdrop-filter backdrop-blur-lg'
                        : 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'
                    }`}
                  >
                    {typeof message.content === 'object'
                      ? message.content.guidance
                      : message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
          <form onSubmit={handleSubmit} className="max-w-7xl mx-auto">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your symptoms..."
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white bg-opacity-50"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-yellow-800 p-2 rounded-r-lg hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-[38px] flex items-center justify-center"
                disabled={isLoading}
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SymptomChecker;