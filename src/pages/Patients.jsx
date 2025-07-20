import { useState } from 'react';
import { FiSearch, FiUser, FiMail, FiPhone } from 'react-icons/fi';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0101', age: 45, gender: 'Male' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0102', age: 32, gender: 'Female' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', phone: '555-0103', age: 28, gender: 'Male' },
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Patients</h1>
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FiUser className="text-blue-500 text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{patient.name}</h2>
                <p className="text-sm text-gray-500">{patient.gender}, {patient.age} years</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <FiMail className="mr-2" />
                <span>{patient.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FiPhone className="mr-2" />
                <span>{patient.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;