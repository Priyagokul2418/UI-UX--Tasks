import { useState } from "react";
import { doctors, availableSlots } from "../mockData";

export default function AppointmentForm({ currentUser }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    console.log("Appointment booked:", {
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      reason,
    });
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");
    setReason("");
    setIsSubmitted(false);
  };

  const availableTimes = selectedDoctor && selectedDate 
    ? availableSlots[selectedDoctor] 
    : [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {isSubmitted ? (
        <div className="text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Appointment Booked!
          </h2>
          <p className="text-gray-600 mb-6">
            Your appointment has been successfully scheduled.
          </p>
          <button
            onClick={resetForm}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Book New Appointment
          </h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="doctor">
              Select Doctor
            </label>
            <select
              id="doctor"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              <option value="">-- Select a doctor --</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} ({doctor.specialty})
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="date">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {selectedDate && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="time">
                Available Time Slots
              </label>
              {availableTimes.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`p-3 border rounded-lg ${
                        selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No available slots for this doctor on the selected date.
                </p>
              )}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="reason">
              Reason for Appointment
            </label>
            <textarea
              id="reason"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="3"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
            disabled={!selectedDoctor || !selectedDate || !selectedTime || !reason}
          >
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
}