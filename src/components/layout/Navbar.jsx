// src/components/layout/Navbar.jsx
import { FiSearch, FiBell, FiUser } from 'react-icons/fi'

const Navbar = ({ globalSearch, setGlobalSearch }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search dashboard..."
            className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 w-64"
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiBell className="text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white">
            <FiUser />
          </div>
          <span className="text-sm font-medium">Dr. Priya Kumar</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar