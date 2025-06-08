import type { FC } from 'react';

export interface InfoCardI {
  title: string;
  count: number;
  date: string;
}

interface PropsI {
  data: InfoCardI;
}

const InfoCard: FC<PropsI> = ({ data }) => {
  return (
    <div className=''>
      <h2 className='font-semibold text-center'>{data.title}</h2>
      <p className='text-3xl font-bold text-center py-2'>{data.count}</p>
      <p className='text-gray-500 text-sm text-center'>{data.date}</p>
    </div>
  );
};
export default InfoCard;
