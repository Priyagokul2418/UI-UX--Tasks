
import { useState, useEffect } from 'react';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';
import MetricCard from '../components/ui/MetricCard';
import { AreaChartComponent, BarChartComponent, LineChartComponent, PieChartComponent, RadarChartComponent } from '../components/charts';
import AppointmentsTable from '../components/ui/Table';

const Dashboard = () => {
  const [animateChart, setAnimateChart] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');

  useEffect(() => {
    setAnimateChart(true);
  }, []);

  // Sample data
  const patientStats = [
    { name: 'Jan', new: 20, followup: 15, emergency: 5, children: 8 },
    { name: 'Feb', new: 35, followup: 20, emergency: 8, children: 12 },
    { name: 'Mar', new: 28, followup: 18, emergency: 6, children: 10 },
  ];

  const medicineSales = [
    { name: 'Jan', sales: 2400 },
    { name: 'Feb', sales: 3800 },
    { name: 'Mar', sales: 2900 },
  ];

  const appointmentData = [
    { name: 'Mon', appointments: 8, canceled: 2 },
    { name: 'Tue', appointments: 12, canceled: 1 },
    { name: 'Wed', appointments: 10, canceled: 3 },
  ];

  const genderData = [
    { name: 'Male', value: 45 },
    { name: 'Female', value: 55 },
  ];

  const departmentPerformance = [
    { subject: 'Cardiology', performance: 90, fullMark: 100 },
    { subject: 'Pediatrics', performance: 75, fullMark: 100 },
    { subject: 'Neurology', performance: 85, fullMark: 100 },
    { subject: 'Orthopedics', performance: 65, fullMark: 100 },
    { subject: 'Oncology', performance: 80, fullMark: 100 },
  ];

  const metricCards = [
    { title: 'Total Patients', value: '1,248', change: '+12%', icon: '👥', trend: 'up' },
    { title: "Today's Appointments", value: '18', change: '+3', icon: '📅', trend: 'up' },
    { title: 'Prescriptions', value: '42', change: '+5', icon: '💊', trend: 'up' },
    { title: 'Medicine Sales', value: '₹84,520', change: '+8%', icon: '💰', trend: 'up' },
  ];

  return (
    <div className="p-6 flex-1 min-w-0">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search dashboard..."
              className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiBell className="text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <FiUser />
            </div>
            <span className="text-sm font-medium">Dr. Priya Kumar</span>
          </div>
        </div>
      </div>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metricCards.map((card, index) => (
          <MetricCard 
            key={index}
            title={card.title}
            value={card.value}
            change={card.change}
            icon={card.icon}
            trend={card.trend}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="space-y-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Weekly Appointments</h2>
            <BarChartComponent data={appointmentData} animateChart={animateChart} />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Medicine Sales (₹)</h2>
            <LineChartComponent data={medicineSales} animateChart={animateChart} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Patient Gender</h2>
            <PieChartComponent data={genderData} animateChart={animateChart} />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Monthly Patient Stats</h2>
            <AreaChartComponent data={patientStats} animateChart={animateChart} />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Department Performance</h2>
            <RadarChartComponent 
              data={departmentPerformance} 
              animateChart={animateChart}
              outerRadius={80}
            />
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointments Overview</h2>
        <AppointmentsTable />
      </div>
    </div>
  );
};

export default Dashboard;