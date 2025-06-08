import { Pie } from '@ant-design/plots';

const DailyActiveUserChart = () => {
  const options = {
    autoFit: true,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      position: 'bottom',
      layout: 'horizontal',
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    data: [
      { type: 'Staff', value: 151 },
      { type: 'Students', value: 200 },
      { type: 'Teachers', value: 180 },
      { type: 'Others', value: 151 },
    ],
  };

  return (
    <>
      <div className='w-full'>
        <Pie {...options} />
      </div>
    </>
  );
};
export default DailyActiveUserChart;
