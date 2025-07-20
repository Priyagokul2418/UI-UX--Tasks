import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const BarChartComponent = ({ data, animateChart }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        animationBegin={animateChart ? 300 : 0} 
        animationDuration={1000}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar 
          dataKey="appointments" 
          fill="#87CEEB" 
          name="Scheduled" 
          radius={[4, 4, 0, 0]}
          animationBegin={animateChart ? 400 : 0}
          animationDuration={800}
        />
        <Bar 
          dataKey="canceled" 
          fill="#FFB6C1" 
          name="Canceled" 
          radius={[4, 4, 0, 0]}
          animationBegin={animateChart ? 600 : 0}
          animationDuration={800}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent