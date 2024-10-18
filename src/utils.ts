import { format, parse, formatDistanceStrict } from 'date-fns';

export function classnames(...args: any[]) {
  return args.filter(Boolean).join(' ');
}

export function formatTimespan(startDateStr: string, endDateStr: string) {
  const startDate = parse(startDateStr, 'yyyy-MM-dd', new Date());
  const endDate = parse(endDateStr, 'yyyy-MM-dd', new Date());
  const startDateFormatted = format(startDate, 'MMM yyyy');
  const endDateFormatted = format(endDate, 'MMM yyyy');
  return `${startDateFormatted} - ${endDateFormatted}`;
}
