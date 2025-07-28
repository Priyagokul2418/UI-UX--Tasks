import { useState } from "react";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";
import ReminderSettings from "../components/ReminderSettings";

export default function PatientView({ currentUser }) {
  const [activeTab, setActiveTab] = useState("book");

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Patient Dashboard</h1>
      
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("book")}
          className={`px-4 py-2 font-medium ${
            activeTab === "book"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Book Appointment
        </button>
        <button
          onClick={() => setActiveTab("my-appointments")}
          className={`px-4 py-2 font-medium ${
            activeTab === "my-appointments"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          My Appointments
        </button>
        <button
          onClick={() => setActiveTab("reminders")}
          className={`px-4 py-2 font-medium ${
            activeTab === "reminders"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Reminder Settings
        </button>
      </div>

      {activeTab === "book" && <AppointmentForm currentUser={currentUser} />}
      {activeTab === "my-appointments" && (
        <AppointmentList currentUser={currentUser} />
      )}
      {activeTab === "reminders" && <ReminderSettings currentUser={currentUser} />}
    </div>
  );
}