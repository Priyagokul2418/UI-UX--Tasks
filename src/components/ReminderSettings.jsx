import { useState } from "react";

export default function ReminderSettings({ currentUser }) {
  const [settings, setSettings] = useState({
    emailReminders: true,
    smsReminders: false,
    reminderTime: "24", // hours before appointment
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save to backend
    console.log("Reminder settings saved:", settings);
    alert("Reminder settings updated successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Reminder Settings
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 mb-4">
            <input
              type="checkbox"
              name="emailReminders"
              checked={settings.emailReminders}
              onChange={handleChange}
              className="mr-2"
            />
            Email Reminders
          </label>
          
          <label className="block text-gray-700 mb-4">
            <input
              type="checkbox"
              name="smsReminders"
              checked={settings.smsReminders}
              onChange={handleChange}
              className="mr-2"
            />
            SMS Reminders
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Send Reminder Before Appointment
          </label>
          <select
            name="reminderTime"
            value={settings.reminderTime}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="1">1 hour before</option>
            <option value="24">24 hours before</option>
            <option value="48">48 hours before</option>
            <option value="72">72 hours before</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}