import React, { useState } from 'react';
import {
  MessageSquare,
  Activity,
  AlertCircle,
  User,
  LogOut,
  Menu as MenuIcon,
  X,
  FileText, // Added for Reports icon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { api } from '../config/api';
import ChatMessage from '../components/ChatMessage';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: MessageSquare, label: 'Chats', link: '#chats' },
    { icon: Activity, label: 'Real-time Monitoring', link: '#monitoring' },
    { icon: AlertCircle, label: 'Emergency', link: '#emergency' },
    { icon: FileText, label: 'Medical Reports', link: '#reports' }, // Added Reports menu item
    { icon: User, label: 'Your Profile', link: '#profile' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 z-40
      `}>
        {/* Logo */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">MediApp</h1>
        </div>

        {/* Menu Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full p-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default function PatientDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chats');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsLoading(true);

    try {
      const data = await api.chat.send(userMessage);
      
      if (!data.response) {
        throw new Error('No response received from the server');
      }
      
      setMessages(prev => [...prev, { text: data.response, sender: 'ai' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        text: error instanceof Error 
          ? `Error: ${error.message}` 
          : 'Sorry, I encountered an error. Please try again.',
        sender: 'ai'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // TODO: Implement file upload and processing logic
    // This is a placeholder for the actual implementation
    try {
      const formData = new FormData();
      formData.append('report', file);

      // Example API call to process the report
      // const response = await fetch('http://localhost:5000/api/reports/upload', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   }
      // });
      // const data = await response.json();
      
      console.log('File uploaded:', file.name);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, {user.fullName}</h1>
          <p className="text-gray-600">Manage your health journey with our AI-powered platform</p>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'chats' && (
            <div className="h-[calc(100vh-250px)] flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Chat with AI Medical Assistant</h2>
              
              {/* Chat Messages Container */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 border rounded-lg">
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    text={message.text}
                    sender={message.sender}
                  />
                ))}
                {isLoading && (
                  <div className="flex items-center space-x-2 p-4">
                    <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full"></div>
                    <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full" style={{ animationDelay: '0.2s' }}></div>
                    <div className="animate-bounce h-2 w-2 bg-gray-400 rounded-full" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                )}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className={`px-4 py-2 rounded-lg bg-blue-600 text-white font-medium 
                    ${isLoading || !input.trim() 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-blue-700 active:bg-blue-800'}`}
                >
                  Send
                </button>
              </form>
            </div>
          )}
          
          {activeTab === 'reports' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Medical Reports</h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="report-upload"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                  />
                  <label
                    htmlFor="report-upload"
                    className="cursor-pointer flex flex-col items-center space-y-2"
                  >
                    <FileText size={40} className="text-blue-600" />
                    <span className="text-gray-600">Click to upload or drag and drop</span>
                    <span className="text-sm text-gray-500">PDF, JPG, PNG files are supported</span>
                  </label>
                </div>
                
                {/* List of uploaded reports */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Your Reports</h3>
                  <div className="space-y-2">
                    {/* This will be populated with actual reports */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText size={20} className="text-gray-500" />
                        <span className="text-gray-700">Example Report.pdf</span>
                      </div>
                      <span className="text-sm text-gray-500">Uploaded on 2024-01-01</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Add other tab contents similarly */}
        </div>
      </div>
    </div>
  );
}

