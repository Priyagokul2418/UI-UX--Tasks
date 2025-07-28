import { users } from "../mockData";
import { useNavigate } from "react-router-dom";

export default function RoleSelector({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleRoleChange = (user) => {
    setCurrentUser(user);
    // Navigate to the corresponding route
    switch(user.role) {
      case "patient":
        navigate("/");
        break;
      case "doctor":
        navigate("/doctor");
        break;
      case "receptionist":
        navigate("/receptionist");
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="bg-gray-100 p-4 mb-6 rounded-lg shadow-inner">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => handleRoleChange(users.patient)}
          className={`px-4 py-2 rounded-full ${
            currentUser.role === "patient"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600"
          }`}
        >
          Patient View
        </button>
        <button
          onClick={() => handleRoleChange(users.doctor)}
          className={`px-4 py-2 rounded-full ${
            currentUser.role === "doctor"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600"
          }`}
        >
          Doctor View
        </button>
        <button
          onClick={() => handleRoleChange(users.receptionist)}
          className={`px-4 py-2 rounded-full ${
            currentUser.role === "receptionist"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600"
          }`}
        >
          Receptionist View
        </button>
        <button
          onClick={() => handleRoleChange(users.admin)}
          className={`px-4 py-2 rounded-full ${
            currentUser.role === "admin"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600"
          }`}
        >
          Admin View
        </button>
      </div>
    </div>
  );
}