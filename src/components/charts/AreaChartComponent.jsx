import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AreaChartComponent = ({ data, animateChart }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart 
        data={data} 
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        animationBegin={animateChart ? 300 : 0} 
        animationDuration={1000}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="new" 
          stackId="1" 
          stroke="#3B82F6" 
          fill="#93C5FD" 
          name="New Patients"
          animationBegin={animateChart ? 400 : 0}
          animationDuration={800}
        />
        <Area 
          type="monotone" 
          dataKey="followup" 
          stackId="1" 
          stroke="#10B981" 
          fill="#A7F3D0" 
          name="Follow-ups"
          animationBegin={animateChart ? 500 : 0}
          animationDuration={800}
        />
        <Area 
          type="monotone" 
          dataKey="emergency" 
          stackId="1" 
          stroke="#EF4444" 
          fill="#FECACA" 
          name="Emergency"
          animationBegin={animateChart ? 600 : 0}
          animationDuration={800}
        />
        <Area 
          type="monotone" 
          dataKey="children" 
          stackId="1" 
          stroke="#8B5CF6" 
          fill="#DDD6FE" 
          name="Children"
          animationBegin={animateChart ? 700 : 0}
          animationDuration={800}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent