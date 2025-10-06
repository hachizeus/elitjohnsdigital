import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { getResponse } from '@/data/chatKnowledge';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm here to help you with your digital needs. How can I assist you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "What services do you offer?",
    "Website pricing",
    "Get a quote",
    "Contact us"
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    const userInput = inputValue;
    setInputValue('');

    // Generate intelligent response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: getResponse(userInput), 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = { id: Date.now(), text: reply, isBot: false };
    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: getResponse(reply), 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 left-4 z-40 w-16 h-16 bg-gradient-to-r from-primary to-green-600 text-white rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-110 animate-glow ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 left-4 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <div className="font-semibold">Elitjohns Assistant</div>
                <div className="text-xs text-green-100">Online now</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-primary text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-2 border-t border-gray-200">
            <div className="flex flex-wrap gap-1 mb-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-gray-100 hover:bg-primary hover:text-white px-2 py-1 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-light transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;