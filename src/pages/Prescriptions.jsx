import { useState } from 'react';
import { FiSearch, FiFileText, FiUser } from 'react-icons/fi';

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const prescriptions = [
    { id: 1, patient: 'John Doe', date: '2023-06-10', medicine: 'Paracetamol', dosage: '500mg', status: 'Active' },
    { id: 2, patient: 'Jane Smith', date: '2023-06-12', medicine: 'Amoxicillin', dosage: '250mg', status: 'Completed' },
    { id: 3, patient: 'Robert Johnson', date: '2023-06-14', medicine: 'Ibuprofen', dosage: '400mg', status: 'Active' },
  ];

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.medicine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Prescriptions</h1>
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search prescriptions..."
            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPrescriptions.map((prescription) => (
              <tr key={prescription.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiUser className="flex-shrink-0 h-5 w-5 text-gray-400" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{prescription.patient}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prescription.medicine}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prescription.dosage}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    prescription.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {prescription.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prescriptions;