'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

function getCalendarDays(viewDate: Date) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((offset + daysInMonth) / 7) * 7;

  return Array.from(
    {
      length: totalCells,
    },
    (_, i) => new Date(year, month, 1 - offset + i),
  );
}
type CalendarProps = {
  value?: Date;
  onChange?: (date: Date) => void;
};

const MiniCalendar = ({ value, onChange }: CalendarProps) => {
  const [viewDate, setViewDate] = useState(() => value ?? new Date());
  const [selected, setSelected] = useState<Date | null>(value ?? null);

  const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);

  const goToMonth = (delta: number) =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + delta, 1));

  const handleSelect = (date: Date) => {
    setSelected(date);
    onChange?.(date);

    if (date.getMonth() !== viewDate.getMonth()) {
      setViewDate(new Date(date.getFullYear(), date.getMonth(), 1));
    }
  };

  const titleMonth = viewDate.toLocaleString('en-US', { month: 'long' });
  return (
    <div className="bg-white rounded-md p-4 flex flex-1 flex-col">
      {/* Month title */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => goToMonth(-1)}
          aria-label="Previous month"
          className="cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <span>{titleMonth}</span>
        <button
          type="button"
          onClick={() => goToMonth(1)}
          aria-label="Next month"
          className="cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
      {/* Weekday header & Date */}
      <div className="flex flex-col text-center text-caption mt-8">
        <div className="grid grid-cols-7 ">
          {WEEKDAYS.map((day, i) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((date, i) => {
            const inMonth = date.getMonth() === viewDate.getMonth();
            const isWeekend = i % 7 >= 5;
            const isSelected = selected !== null && isSameDay(date, selected);

            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => handleSelect(date)}
                className={[
                  'h-8 rounded-xs',
                  isSelected
                    ? 'bg-primary-700 text-white'
                    : !inMonth
                      ? 'text-ink-700'
                      : isWeekend
                        ? 'text-primary-700'
                        : 'text-ink-700',
                ].join(' ')}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
