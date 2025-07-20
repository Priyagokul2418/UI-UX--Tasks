import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RadarChartComponent = ({ data, animateChart, outerRadius = 90 }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius={outerRadius} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Performance"
          dataKey="performance"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
          animationBegin={animateChart ? 300 : 0}
          animationDuration={1000}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;