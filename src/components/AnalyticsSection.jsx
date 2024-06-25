import AnalyticsCard from './AnalyticsCard';
import analyticsData from '../data/analytics.json';
import { User } from 'lucide-react';

export default function AnalyticsSection() {
  return (
    <>
      <div className="grid justify-items-center m-12 grid-cols-1 lg:grid-cols-2 lg:w-[60%] mx-auto  gap-x-0 max-w-4xl">
        {analyticsData.map((data, index) => (
          <AnalyticsCard
            key={index}
            number={data.number}
            title={data.title}
            unit={data.unit}
            icon={<User className="h-10 w-10" />}
          />
        ))}
      </div>
    </>
  );
}
