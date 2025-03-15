import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Loader2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const initialMessage: Message = {
  type: 'bot',
  content: 'Hi! 👋 I\'m your AI assistant. How can I help you today?'
};

const generateResponse = async (message: string): Promise<string> => {
  // Simulate AI response based on user input
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

  const lowercaseMsg = message.toLowerCase();
  
  if (lowercaseMsg.includes('service') || lowercaseMsg.includes('offer')) {
    return `We offer several services including:
    • Data Engineering and Strategy
    • Analytics
    • AI Solutions
    • Cloud Services and Consulting
    • Custom Web App Development
    
    Which service would you like to know more about?`;
  }
  
  if (lowercaseMsg.includes('contact') || lowercaseMsg.includes('reach')) {
    return `You can reach us through:
    • Phone: (587) 889-6189
    • Email: kettsefi.technologies.inc@gmail.com
    • Office Hours: Monday to Friday, 8:00 AM - 5:00 PM
    • Location: Calgary, Alberta`;
  }
  
  if (lowercaseMsg.includes('about') || lowercaseMsg.includes('company')) {
    return 'Kettsefi Technologies is a technology solutions provider founded by a seasoned IT professional. We specialize in data engineering, cloud architecture, AI implementation, and custom software development.';
  }

  if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi')) {
    return 'Hello! How can I assist you today with our technology solutions?';
  }

  return 'I\'d be happy to help you with any questions about our services, company, or how we can help with your technology needs. What would you like to know?';
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await generateResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      console.error('Failed to generate response:', error);
      setMessages(prev => [...prev, { type: 'bot', content: 'I apologize, but I\'m having trouble responding right now. Please try again later.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            <div className="bg-blue-500 p-4 flex items-center justify-between">
              <h3 className="text-white font-semibold">Kettsefi Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
                    <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;