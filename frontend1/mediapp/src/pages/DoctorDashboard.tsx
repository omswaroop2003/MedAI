import { useState } from 'react';
import {
  Users,
  Calendar,
  MessageSquare,
  FileText,
  User,
  LogOut,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: Users, label: 'Patients', link: '#patients' },
    { icon: Calendar, label: 'Appointments', link: '#appointments' },
    { icon: MessageSquare, label: 'Consultations', link: '#consultations' },
    { icon: FileText, label: 'Medical Records', link: '#records' },
    { icon: User, label: 'Profile', link: '#profile' },
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
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
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

export default function DoctorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('patients');
  const menuItems = [
    { id: 'patients', label: 'Patients' },
    { id: 'appointments', label: 'Appointments' },
  ];
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Dr. {user.fullName}</h1>
          <p className="text-gray-600">Manage your patients and appointments</p>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'patients' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Patients</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Sample Patient Cards */}
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-medium">Patient Name</h3>
                    <p className="text-sm text-gray-500">Last visit: 2024-01-01</p>
                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                {/* Sample Appointments */}
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Patient Name</h3>
                      <p className="text-sm text-gray-500">2024-01-01 10:00 AM</p>
                    </div>
                    <div className="space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Accept</button>
                      <button className="text-red-600 hover:text-red-800">Decline</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


