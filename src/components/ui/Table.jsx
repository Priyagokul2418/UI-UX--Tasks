import { useState } from 'react';
import { FiUser, FiCalendar, FiClock, FiChevronUp, FiChevronDown, FiSearch } from 'react-icons/fi';

const AppointmentsTable = () => {
  // Sample data
  const [appointments, setAppointments] = useState({
    upcoming: [
      { id: 1, patient: 'John Doe', date: '2023-06-20', time: '09:00 AM', type: 'Checkup', status: 'Confirmed' },
      { id: 2, patient: 'Jane Smith', date: '2023-06-21', time: '10:30 AM', type: 'Follow-up', status: 'Confirmed' },
      { id: 3, patient: 'Robert Johnson', date: '2023-06-22', time: '02:00 PM', type: 'Consultation', status: 'Pending' },
    ],
    past: [
      { id: 4, patient: 'Emily Davis', date: '2023-06-15', time: '11:00 AM', type: 'Vaccination', status: 'Completed' },
      { id: 5, patient: 'Michael Wilson', date: '2023-06-14', time: '03:45 PM', type: 'Pediatric', status: 'Completed' },
      { id: 6, patient: 'Sarah Brown', date: '2023-06-10', time: '09:30 AM', type: 'Dental', status: 'Cancelled' },
    ]
  });

  const [searchTerms, setSearchTerms] = useState({
    upcoming: '',
    past: ''
  });

  const [sortConfig, setSortConfig] = useState({
    upcoming: { key: 'date', direction: 'asc' },
    past: { key: 'date', direction: 'asc' }
  });

  // Filter and sort functions
  const filterAndSortAppointments = (type) => {
    const filtered = appointments[type].filter(appt => 
      appt.patient.toLowerCase().includes(searchTerms[type].toLowerCase()) ||
      appt.type.toLowerCase().includes(searchTerms[type].toLowerCase()) ||
      appt.status.toLowerCase().includes(searchTerms[type].toLowerCase())
    );

    return [...filtered].sort((a, b) => {
      if (a[sortConfig[type].key] < b[sortConfig[type].key]) {
        return sortConfig[type].direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig[type].key] > b[sortConfig[type].key]) {
        return sortConfig[type].direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const handleSort = (type, key) => {
    setSortConfig(prev => ({
      ...prev,
      [type]: {
        key,
        direction: prev[type].key === key && prev[type].direction === 'asc' ? 'desc' : 'asc'
      }
    }));
  };

  const handleSearch = (type, term) => {
    setSearchTerms(prev => ({
      ...prev,
      [type]: term
    }));
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      confirmed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800',
      default: 'bg-gray-100 text-gray-800'
    };
    
    const statusKey = status.toLowerCase();
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
        statusClasses[statusKey] || statusClasses.default
      }`}>
        {status}
      </span>
    );
  };

  const renderTable = (type) => {
    const data = filterAndSortAppointments(type);
    const config = sortConfig[type];

    return (
      <div className="bg-white rounded-lg shadow overflow-hidden h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {type === 'upcoming' ? 'Upcoming Appointments' : 'Past Appointments'}
            </h2>
            <div className="relative w-48">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${type}...`}
                className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerms[type]}
                onChange={(e) => handleSearch(type, e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(type, 'patient')}
                >
                  <div className="flex items-center">
                    Patient
                    {config.key === 'patient' && (
                      config.direction === 'asc' ? 
                        <FiChevronUp className="ml-1" /> : 
                        <FiChevronDown className="ml-1" />
                    )}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(type, 'date')}
                >
                  <div className="flex items-center">
                    Date
                    {config.key === 'date' && (
                      config.direction === 'asc' ? 
                        <FiChevronUp className="ml-1" /> : 
                        <FiChevronDown className="ml-1" />
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(type, 'status')}
                >
                  <div className="flex items-center">
                    Status
                    {config.key === 'status' && (
                      config.direction === 'asc' ? 
                        <FiChevronUp className="ml-1" /> : 
                        <FiChevronDown className="ml-1" />
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.length > 0 ? (
                data.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FiUser className="text-blue-500" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{appointment.patient}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiCalendar className="text-gray-400 mr-2" />
                        <div className="text-sm text-gray-900">{appointment.date}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiClock className="text-gray-400 mr-2" />
                        <div className="text-sm text-gray-900">{appointment.time}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {appointment.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(appointment.status)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    No appointments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderTable('upcoming')}
        {renderTable('past')}
      </div>
    </div>
  );
};

export default AppointmentsTable;