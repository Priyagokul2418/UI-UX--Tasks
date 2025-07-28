import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { users } from "./mockData";
import Navbar from "./components/Navbar";
import RoleSelector from "./components/RoleSelector";
import PatientView from "./pages/PatientView";
import DoctorView from "./pages/DoctorView"
import ReceptionistView from "./pages/ReceptionistView";
import AdminView from "./pages/AdminView";

function App() {
  const [currentUser, setCurrentUser] = useState(users.patient);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar currentUser={currentUser} />
        <RoleSelector currentUser={currentUser} setCurrentUser={setCurrentUser} />
        
        <div className="container mx-auto px-4 py-8">
      <Routes>
        <Route path="/" element={<PatientView />} />
        <Route path="/doctor" element={<DoctorView />} />
        <Route path="/receptionist" element={<ReceptionistView />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;