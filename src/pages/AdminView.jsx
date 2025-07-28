// src/pages/AdminView.jsx
import { useState } from 'react';
import { doctors, availableSlots, appointments } from '../mockData';

export default function AdminView({ currentUser }) {
  const [activeTab, setActiveTab] = useState('doctors');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Check doctor's present/absent status based on appointments
  const getDoctorStatus = (doctorId) => {
    const hasAppointments = appointments.some(
      appt => appt.doctorId === doctorId && appt.date === selectedDate
    );
    return hasAppointments ? 'Present' : 'Absent';
  };

  // Get doctor's schedule for selected date
  const getDoctorSchedule = (doctorId) => {
    const doctorAppointments = appointments.filter(
      appt => appt.doctorId === doctorId && appt.date === selectedDate
    );
    
    return {
      available: availableSlots[doctorId] || [],
      booked: doctorAppointments.map(appt => appt.time)
    };
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      
      {/* Date Selector */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Date:
        </label>
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('doctors')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'doctors'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Doctors Management
        </button>
        <button
          onClick={() => setActiveTab('availability')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'availability'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Availability Settings
        </button>
      </div>

      {/* Doctors List */}
      {activeTab === 'doctors' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status ({selectedDate})
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Available Slots
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booked Slots
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {doctors.map((doctor) => {
                const schedule = getDoctorSchedule(doctor.id);
                const status = getDoctorStatus(doctor.id);
                
                return (
                  <tr key={doctor.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{doctor.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {doctor.specialty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {schedule.available.map(slot => (
                          <span 
                            key={slot}
                            className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs"
                          >
                            {slot}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {schedule.booked.map(slot => (
                          <span 
                            key={slot}
                            className="bg-purple-50 text-purple-800 px-2 py-1 rounded text-xs"
                          >
                            {slot}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Availability Settings */}
      {activeTab === 'availability' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Manage Doctor Availability</h2>
          <div className="space-y-6">
            {doctors.map(doctor => (
              <div key={doctor.id} className="border-b border-gray-200 pb-4">
                <h3 className="font-medium">{doctor.name} ({doctor.specialty})</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {availableSlots[doctor.id]?.map(slot => (
                    <div key={slot} className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                      {slot}
                      <button className="ml-1 text-red-500 hover:text-red-700">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex">
                  <input
                    type="time"
                    className="p-2 border border-gray-300 rounded-l-md"
                    step="1800" // 30-minute increments
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                    Add Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}