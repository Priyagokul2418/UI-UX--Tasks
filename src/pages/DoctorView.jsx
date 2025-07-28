import Calendar from "../components/Calender";
import AppointmentList from "../components/AppointmentList";

export default function DoctorView({ currentUser }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Doctor Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Today's Appointments
          </h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-medium">John Doe - Annual Checkup</h3>
                <span className="text-sm text-gray-500">10:00 AM</span>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-medium">Jane Smith - Follow-up</h3>
                <span className="text-sm text-gray-500">2:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Stats
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Today</p>
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm">Appointments</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">This Week</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm">Appointments</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <Calendar currentUser={currentUser} />
      </div>
      
      <AppointmentList currentUser={currentUser} />
    </div>
  );
}