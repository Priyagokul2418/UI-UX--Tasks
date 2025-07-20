import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const LineChartComponent = ({ data, animateChart }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart 
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        animationBegin={animateChart ? 300 : 0} 
        animationDuration={1000}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#8B5CF6" 
          strokeWidth={2} 
          activeDot={{ r: 8 }} 
          dot={{ r: 4 }}
          animationBegin={animateChart ? 500 : 0}
          animationDuration={800}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent