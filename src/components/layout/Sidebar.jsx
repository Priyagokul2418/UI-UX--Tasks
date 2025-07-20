import { useState } from 'react';  // Add this import
import { FiHome, FiUsers, FiCalendar, FiFileText, FiSettings, FiMenu, FiX } from 'react-icons/fi';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#87CEEB] text-gray-800 transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-[#a5d8f5]">
        {sidebarOpen ? (
          <h1 className="text-xl font-bold text-gray-800">MediCare</h1>
        ) : (
          <span className="text-xl font-bold text-gray-800">M</span>
        )}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <nav className="flex-1 mt-6">
        <ul>
          <li>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`flex items-center w-full p-4 ${currentPage === 'dashboard' ? 'bg-[#a5d8f5]' : 'hover:bg-[#a5d8f5]'} transition-colors duration-200 group`}
            >
              <FiHome size={20} className="flex-shrink-0 group-hover:text-gray-900" />
              {sidebarOpen && <span className="ml-3 group-hover:text-gray-900">Dashboard</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('patients')}
              className={`flex items-center w-full p-4 ${currentPage === 'patients' ? 'bg-[#a5d8f5]' : 'hover:bg-[#a5d8f5]'} transition-colors duration-200 group`}
            >
              <FiUsers size={20} className="flex-shrink-0 group-hover:text-gray-900" />
              {sidebarOpen && <span className="ml-3 group-hover:text-gray-900">Patients</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('appointments')}
              className={`flex items-center w-full p-4 ${currentPage === 'appointments' ? 'bg-[#a5d8f5]' : 'hover:bg-[#a5d8f5]'} transition-colors duration-200 group`}
            >
              <FiCalendar size={20} className="flex-shrink-0 group-hover:text-gray-900" />
              {sidebarOpen && <span className="ml-3 group-hover:text-gray-900">Appointments</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('prescriptions')}
              className={`flex items-center w-full p-4 ${currentPage === 'prescriptions' ? 'bg-[#a5d8f5]' : 'hover:bg-[#a5d8f5]'} transition-colors duration-200 group`}
            >
              <FiFileText size={20} className="flex-shrink-0 group-hover:text-gray-900" />
              {sidebarOpen && <span className="ml-3 group-hover:text-gray-900">Prescriptions</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('settings')}
              className={`flex items-center w-full p-4 ${currentPage === 'settings' ? 'bg-[#a5d8f5]' : 'hover:bg-[#a5d8f5]'} transition-colors duration-200 group`}
            >
              <FiSettings size={20} className="flex-shrink-0 group-hover:text-gray-900" />
              {sidebarOpen && <span className="ml-3 group-hover:text-gray-900">Settings</span>}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;