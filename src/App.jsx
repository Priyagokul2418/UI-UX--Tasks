
import { useState } from 'react'
import DoctorDashboard from './pages/Dashboard'
import Patients from './pages/Patients'
import Appointments from './pages/Appointments'
import Prescriptions from './pages/Prescriptions'
import Settings from './pages/Settings'
import Sidebar from './components/layout/Sidebar'
import AppointmentsTable from './components/ui/Table'
function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DoctorDashboard />
      case 'patients':
        return <Patients />
      case 'appointments':
        return <Appointments />
      case 'prescriptions':
        return <Prescriptions />
      case 'settings':
        return <Settings />
      case 'AppointmentsTable':
        return <AppointmentsTable/>
      default:
        return <DoctorDashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 overflow-auto">
        {renderPage()}
      </div>
    </div>
  )
}

export default App