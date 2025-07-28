// src/mockData.js
export const doctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology" },
  { id: 2, name: "Dr. Nikitha ", specialty: "Pediatrics" },
  { id: 3, name: "Dr. kala", specialty: "Dermatology" },
  { id: 4, name: "Dr. David ", specialty: "Orthopedics" },
  { id: 5, name: "Dr. Jessica ", specialty: "Neurology" }
];

export const patients = [
  { id: 101, name: "Johnson" },
  { id: 102, name: "Maria " },
  { id: 103, name: "Robert" },
  { id: 104, name: "Lilly" },
  { id: 105, name: "James Miller" }
];

export const appointments = [
  // Doctor 1 (Cardiology) Appointments
  {
    id: 1001,
    patientName: "Johnson",
    doctorId: 1,
    date: "2023-06-15",
    time: "09:00",
    status: "completed",
    reason: "Heart checkup"
  },
  {
    id: 1002,
    patientName: "Maria",
    doctorId: 1,
    date: "2023-06-15",
    time: "10:30",
    status: "confirmed",
    reason: "ECG follow-up"
  },
  {
    id: 1003,
    patientName: "Robert",
    doctorId: 1,
    date: "2023-06-16",
    time: "14:00",
    status: "confirmed",
    reason: "Blood pressure consultation"
  },

  // Doctor 2 (Pediatrics) Appointments
  {
    id: 2001,
    patientName: "Lilly",
    doctorId: 2,
    date: "2023-06-15",
    time: "08:30",
    status: "completed",
    reason: "Child vaccination"
  },
  {
    id: 2002,
    patientName: "James Miller",
    doctorId: 2,
    date: "2023-06-16",
    time: "11:00",
    status: "confirmed",
    reason: "Annual physical"
  },
  {
    id: 2003,
    patientName: "Johnson",
    doctorId: 2,
    date: "2023-06-17",
    time: "15:30",
    status: "pending",
    reason: "Fever consultation"
  },

  // Doctor 3 (Dermatology) Appointments
  {
    id: 3001,
    patientName: "Maria",
    doctorId: 3,
    date: "2023-06-16",
    time: "09:15",
    status: "confirmed",
    reason: "Skin allergy check"
  },
  {
    id: 3002,
    patientName: "Lilly",
    doctorId: 3,
    date: "2023-06-17",
    time: "13:45",
    status: "cancelled",
    reason: "Acne treatment"
  },
  {
    id: 3003,
    patientName: "James",
    doctorId: 3,
    date: "2023-06-18",
    time: "10:00",
    status: "confirmed",
    reason: "Mole examination"
  },

  // Doctor 4 (Orthopedics) Appointments
  {
    id: 4001,
    patientName: "Robert",
    doctorId: 4,
    date: "2023-06-17",
    time: "08:00",
    status: "completed",
    reason: "Knee pain follow-up"
  },
  {
    id: 4002,
    patientName: "Johnson",
    doctorId: 4,
    date: "2023-06-18",
    time: "14:30",
    status: "confirmed",
    reason: "Back pain consultation"
  },

  // Doctor 5 (Neurology) Appointments
  {
    id: 5001,
    patientName: "Maria",
    doctorId: 5,
    date: "2023-06-18",
    time: "11:15",
    status: "pending",
    reason: "Migraine evaluation"
  },
  {
    id: 5002,
    patientName: "Lilly",
    doctorId: 5,
    date: "2023-06-19",
    time: "16:00",
    status: "confirmed",
    reason: "Sleep disorder consultation"
  }
];

export const users = {
  patient: { id: 101, name: "John Smith", role: "patient" },
  doctor: { id: 1, name: "Dr. Sarah Johnson", role: "doctor" },
  receptionist: { id: 6, name: "Amy Taylor", role: "receptionist" },
  admin: { id: 7, name: "Admin User", role: "admin" }
};

export const availableSlots = {
  1: ["08:00", "09:00", "10:30", "14:00", "15:30"],
  2: ["08:30", "11:00", "13:00", "15:00"],
  3: ["09:15", "10:45", "13:45", "16:15"],
  4: ["08:00", "10:00", "14:30", "16:00"],
  5: ["09:00", "11:15", "14:00", "16:00"]
};

export const holidays = ["2023-07-04", "2023-09-04", "2023-11-23", "2023-12-25"];