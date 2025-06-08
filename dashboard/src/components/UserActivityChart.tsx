import { Line } from '@ant-design/plots';

const UserActivityChart = () => {
  const options = {
    data: [
      { date: 'Step 1', value: 150, type: 'User 1' },
      { date: 'Step 2', value: 200, type: 'User 1' },
      { date: 'Step 3', value: 170, type: 'User 1' },
      { date: 'Step 4', value: 220, type: 'User 1' },
      { date: 'Step 5', value: 180, type: 'User 1' },
      { date: 'Step 6', value: 250, type: 'User 1' },
      { date: 'Step 1', value: 250, type: 'User 2' },
      { date: 'Step 2', value: 300, type: 'User 2' },
      { date: 'Step 3', value: 80, type: 'User 2' },
      { date: 'Step 4', value: 190, type: 'User 2' },
      { date: 'Step 5', value: 200, type: 'User 2' },
      { date: 'Step 6', value: 60, type: 'User 2' },
    ],
    xField: 'date', // X-axis field (date)
    yField: 'value', // Y-axis field (value)
    seriesField: 'type', // Grouping by category to differentiate the lines
    smooth: true, // Make the line smooth
    legend: {
      position: 'top-left', // Legend position
    },
    tooltip: {
      showMarkers: false, // Hide markers in the tooltip
    },
    autoFit: true,
    xAxis: {
      title: {
        text: 'Date', // X-axis label
        style: { fontSize: 14, fontWeight: 'bold' }, // Style for the axis title
      },
    },
    yAxis: {
      title: {
        text: 'Value', // Y-axis label
        style: { fontSize: 14, fontWeight: 'bold' }, // Style for the axis title
      },
    },
  };

  return (
    <>
      <Line {...options} />
    </>
  );
};
export default UserActivityChart;
