'use client';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

type Props = {};

const WelcomeTitle = ({ ...props }: Props) => {
  const [date, setDate] = useState({
    date: '',
    timeOfDay: '',
  });
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    const timeOfDay =
      hour >= 5 && hour < 12
        ? 'morning'
        : hour >= 12 && hour < 17
          ? 'afternoon'
          : hour >= 17 && hour < 21
            ? 'evening'
            : 'night';
    setDate({
      date: format(now, 'EEEE, MMMM dd, yyyy'),
      timeOfDay,
    });
  }, []);
  return (
    <div className="flex flex-col items-start">
      <span className="text-body font-semibold text-ink-400">{date.date}</span>
      <span className="text-header-1 font-bold">
        Good {date.timeOfDay}, Shirley
      </span>
    </div>
  );
};

export default WelcomeTitle;
