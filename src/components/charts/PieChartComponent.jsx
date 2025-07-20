import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#0088FE', '#FF8042', '#00C49F', '#FFBB28', '#8884d8']

const PieChartComponent = ({ data, animateChart }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart animationBegin={animateChart ? 300 : 0} animationDuration={1000}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          animationBegin={animateChart ? 400 : 0}
          animationDuration={800}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent