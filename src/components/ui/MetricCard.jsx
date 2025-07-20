// src/components/ui/MetricCard.jsx
const MetricCard = ({ title, value, change, icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-sky-50">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2 text-gray-800">{value}</p>
          <p className={`${trend === 'up' ? 'text-green-500' : 'text-red-500'} text-sm mt-1`}>
            {change}
          </p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  )
}

export default MetricCard