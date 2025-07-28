import { useState } from 'react';
import Calendar from '../components/Calendar';
import { appointments, doctors } from '../mockData';

export default function DoctorView({ currentUser }) {
  const [activeTab, setActiveTab] = useState('today');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Filter appointments for the current doctor
  const doctorAppointments = appointments.filter(
    appt => appt.doctorId === currentUser.id
  );

  // Get today's appointments
  const today = new Date().toISOString().split('T')[0];
  const todaysAppointments = doctorAppointments.filter(
    appt => appt.date === today
  );

  // Get upcoming appointments (excluding today)
  const upcomingAppointments = doctorAppointments.filter(
    appt => appt.date > today
  ).sort((a, b) => new Date(a.date) - new Date(b.date));

  const openAppointmentDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm text-gray-600">Total Appointments</p>
          <p className="text-3xl font-bold">{doctorAppointments.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm text-gray-600">Today's Appointments</p>
          <p className="text-3xl font-bold">{todaysAppointments.length}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm text-gray-600">Upcoming Appointments</p>
          <p className="text-3xl font-bold">{upcomingAppointments.length}</p>
        </div>
      </div>

      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('today')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'today'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Today's Schedule
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'upcoming'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Upcoming Appointments
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'calendar'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Calendar View
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {activeTab === 'today' && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
            {todaysAppointments.length === 0 ? (
              <p className="text-gray-500">No appointments scheduled for today.</p>
            ) : (
              <div className="space-y-3">
                {todaysAppointments.map(appt => (
                  <div 
                    key={appt.id}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => openAppointmentDetails(appt)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{appt.patientName}</h3>
                        <p className="text-sm text-gray-600">{appt.reason}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {appt.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.length === 0 ? (
              <p className="text-gray-500">No upcoming appointments.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reason
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {upcomingAppointments.map(appt => (
                      <tr key={appt.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {appt.patientName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {appt.date} at {appt.time}
                        </td>
                        <td className="px-6 py-4">
                          {appt.reason}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => openAppointmentDetails(appt)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Appointment Calendar</h2>
            <Calendar currentUser={currentUser} />
          </div>
        )}
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">Appointment Details</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Patient Name</p>
                  <p className="font-medium">{selectedAppointment.patientName}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-medium">
                    {selectedAppointment.date} at {selectedAppointment.time}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Reason</p>
                  <p className="font-medium">{selectedAppointment.reason}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {selectedAppointment.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}