import { format, formatDistanceStrict } from 'date-fns';

export type TJob = {
  title: React.ReactNode;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location: string;
  commuteType: string;
  highlights: string[];
};

function formatDuration(startDate: string, endDate: string) {
  const durationYears = formatDistanceStrict(new Date(startDate), new Date(endDate), {
    unit: 'year',
    roundingMethod: 'floor',
    addSuffix: false,
  });

  const years = Number.parseInt(durationYears, 10);

  const yearsPart = years && `${years}y`;

  const durationMonths = formatDistanceStrict(new Date(startDate), new Date(endDate), {
    unit: 'month',
    roundingMethod: 'ceil',
    addSuffix: false,
  });

  const months = Number.parseInt(durationMonths, 10) % 12;

  const monthsPart = months && `${months}m`;

  return [yearsPart, monthsPart].filter(Boolean).join(' ');
}

type Event = {
  startDate: string;
  endDate: string;
  title: React.ReactNode;
};

type Props = {
  event: Event;
  children: React.ReactNode;
  className?: string;
  showDuration?: boolean;
};

function Bullet() {
  return (
    <div
      className={[
        'absolute',
        '-translate-x-1/2',
        '-translate-y-1',
        'text-emerald-600',
        '-left-[1px]',
        'text-xl',
      ].join(' ')}
    >
      ●
    </div>
  );
}

export function TimelineEvent({
  event,
  children,
  showDuration,
  className = '',
}: Props) {
  const startDateFormatted = format(new Date(event.startDate + 'Z'), 'MMM yyyy');
  const endDateFormatted = format(new Date(event.endDate), 'MMM yyyy');
  const duration = formatDuration(event.startDate, event.endDate);

  return (
    <div
      className={`break-inside-avoid border-l-2 border-slate-200 pl-6 relative ${className}`}
    >
      <Bullet />
      <span className={`text-emerald-600 font-bold`}>
        <span>
          {startDateFormatted} - {endDateFormatted}
        </span>
        {showDuration && (
          <span className="font-normal  text-emerald-600"> ・{duration}</span>
        )}
      </span>

      <h3 className="text-md font-bold ">{event.title}</h3>
      {children}
    </div>
  );
}
