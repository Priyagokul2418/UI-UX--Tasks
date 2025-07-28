import { useState } from "react";
import { doctors, holidays } from "../mockData";

export default function AdminPanel({ currentUser }) {
  const [newHoliday, setNewHoliday] = useState("");
  const [holidaysList, setHolidaysList] = useState(holidays);
  const [doctorSlots, setDoctorSlots] = useState({
    1: ["09:00", "10:00", "11:00", "14:00", "15:00"],
    2: ["10:00", "11:00", "13:00", "14:00"],
    3: ["09:30", "11:30", "14:30", "15:30"],
  });
  const [selectedDoctor, setSelectedDoctor] = useState(1);
  const [newSlot, setNewSlot] = useState("");

  const addHoliday = () => {
    if (newHoliday && !holidaysList.includes(newHoliday)) {
      setHolidaysList([...holidaysList, newHoliday]);
      setNewHoliday("");
    }
  };

  const removeHoliday = (date) => {
    setHolidaysList(holidaysList.filter((d) => d !== date));
  };

  const addSlot = () => {
    if (newSlot && !doctorSlots[selectedDoctor].includes(newSlot)) {
      setDoctorSlots({
        ...doctorSlots,
        [selectedDoctor]: [...doctorSlots[selectedDoctor], newSlot].sort(),
      });
      setNewSlot("");
    }
  };

  const removeSlot = (slot) => {
    setDoctorSlots({
      ...doctorSlots,
      [selectedDoctor]: doctorSlots[selectedDoctor].filter((s) => s !== slot),
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Manage Holidays
        </h2>
        
        <div className="flex mb-4">
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-l-lg flex-grow"
            value={newHoliday}
            onChange={(e) => setNewHoliday(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />
          <button
            onClick={addHoliday}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Add Holiday
          </button>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {holidaysList.map((date) => (
                <tr key={date}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => removeHoliday(date)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Manage Doctor Availability
        </h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Doctor</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(Number(e.target.value))}
          >
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} ({doctor.specialty})
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex mb-4">
          <input
            type="time"
            className="p-2 border border-gray-300 rounded-l-lg flex-grow"
            value={newSlot}
            onChange={(e) => setNewSlot(e.target.value)}
            step="1800" // 30-minute increments
          />
          <button
            onClick={addSlot}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Add Slot
          </button>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-medium">Available Time Slots</h3>
          <div className="flex flex-wrap gap-2">
            {doctorSlots[selectedDoctor]?.map((slot) => (
              <div
                key={slot}
                className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full flex items-center"
              >
                {slot}
                <button
                  onClick={() => removeSlot(slot)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}