import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { checkSymptoms } from '../utils/api';

const SymptomChecker = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const lastSymptoms = localStorage.getItem('lastSymptoms');
    if (lastSymptoms) {
      setInput(lastSymptoms);
    }
  }, []);

  useEffect(() => {
    const storedMessages = localStorage.getItem('symptomCheckerMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
      const diagnosis = await checkSymptoms(input);
      const aiMessage = { type: 'ai', content: diagnosis };
      updatedMessages.push(aiMessage);
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { type: 'ai', content: 'Sorry, I encountered an error. Please try again.' };
      updatedMessages.push(errorMessage);
      setMessages(updatedMessages);
    }

    setIsLoading(false);
    localStorage.setItem('lastSymptoms', input);
    localStorage.setItem('symptomCheckerMessages', JSON.stringify(updatedMessages));
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-yellow-900 to-yellow-200 ml-64"> {/* Added gradient background */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${message.type === 'user' ? 'bg-yellow-600 text-black backdrop-filter backdrop-blur-lg' : 'bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'}`}>
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
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
  );
};

export default SymptomChecker;