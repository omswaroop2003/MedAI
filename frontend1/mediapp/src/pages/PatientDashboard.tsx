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
  const user = JSON.parse(localStorage.getItem('user') || '{}');

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
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Conversations</h2>
              <p className="text-gray-600">Start a new chat with our AI Medical Assistant</p>
              {/* Add chat interface here */}
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

