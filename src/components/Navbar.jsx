import { Link } from "react-router-dom";

export default function Navbar({ currentUser }) {
  const getRolePath = () => {
    switch (currentUser.role) {
      case "doctor":
        return "/doctor";
      case "receptionist":
        return "/receptionist";
      case "admin":
        return "/admin";
      default:
        return "/";
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={getRolePath()} className="text-xl font-bold">
          Patient Scheduler
        </Link>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">Welcome, {currentUser.name}</span>
          <span className="bg-blue-700 px-3 py-1 rounded-full text-sm">
            {currentUser.role}
          </span>
        </div>
      </div>
    </nav>
  );
}