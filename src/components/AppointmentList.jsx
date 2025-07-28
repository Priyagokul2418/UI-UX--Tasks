import { appointments, doctors } from "../mockData";
import PropTypes from "prop-types";

export default function AppointmentList({ currentUser = {}, showAll = false }) {
  // Safe access with defaults
  const userName = currentUser?.name || "";
  const userRole = currentUser?.role || "patient";

  // Filter appointments based on user role
  const filteredAppointments = appointments.filter((appt) => {
    if (showAll) return true;
    if (userRole === "doctor") return appt.doctorId === currentUser?.id;
    if (userRole === "patient") return appt.patientName === userName;
    return true; // admin/receptionist sees all when showAll is false
  });

  const getDoctorName = (doctorId) => {
    const doctor = doctors.find((doc) => doc.id === doctorId);
    return doctor ? `${doctor.name} (${doctor.specialty})` : "Unknown Doctor";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-800 p-6 border-b">
        {userRole === "doctor" ? "My Appointments" : "Appointments"}
      </h2>

      {filteredAppointments.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          No appointments found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table headers */}
            <thead className="bg-gray-50">
              <tr>
                {userRole !== "doctor" && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  {userRole !== "doctor" && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getDoctorName(appointment.doctorId)}
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appointment.date} at {appointment.time}
                  </td>
                  <td className="px-6 py-4">{appointment.reason}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : appointment.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Reschedule
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

AppointmentList.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
  showAll: PropTypes.bool,
};

AppointmentList.defaultProps = {
  currentUser: {
    id: 0,
    name: "Guest",
    role: "patient",
  },
  showAll: false,
};
