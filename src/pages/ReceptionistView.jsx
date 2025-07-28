import { useState } from 'react';
import Calendar from "../components/Calender";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

export default function ReceptionistView({ currentUser }) {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Receptionist Dashboard</h1>
      
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('appointments')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'appointments'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          All Appointments
        </button>
        
        <button
          onClick={() => setActiveTab('book')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'book'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Book Appointment
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'calendar'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Calendar
        </button>
        
      </div>
      {activeTab === 'appointments' && (
        <AppointmentList currentUser={currentUser} showAll />
      )}
      {activeTab === 'calendar' && <Calendar currentUser={currentUser} />}
      {activeTab === 'book' && <AppointmentForm currentUser={currentUser} />}
      
    </div>
  );
}