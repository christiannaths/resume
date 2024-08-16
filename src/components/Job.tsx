import { format, formatDistanceStrict } from "date-fns";
import { List } from "./List";

export type TJob = {
  title: React.ReactNode;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location: string;
  commuteType: string;
};

function formatDuration(startDate: string, endDate: string) {
  const durationYears = formatDistanceStrict(
    new Date(startDate),
    new Date(endDate),
    {
      unit: "year",
      roundingMethod: "floor",
      addSuffix: false,
    }
  );

  const years = Number.parseInt(durationYears, 10);

  const yearsPart = years && durationYears;

  const durationMonths = formatDistanceStrict(
    new Date(startDate),
    new Date(endDate),
    {
      unit: "month",
      roundingMethod: "ceil",
      addSuffix: false,
    }
  );

  const months = Number.parseInt(durationMonths, 10) % 12;

  const monthsPart =
    months > 1 ? `${months} months` : months === 1 ? "1 month" : null;

  return [yearsPart, monthsPart].filter(Boolean).join(" ");
}

export function Job({
  title,
  company,
  employmentType,
  startDate,
  endDate,
  location,
  commuteType,
}: TJob) {
  const startDateFormatted = format(new Date(startDate + "Z"), "MMM yyyy");
  const endDateFormatted = format(new Date(endDate), "MMM yyyy");
  const duration = formatDuration(startDate, endDate);

  console.log(
    title,
    startDate,
    new Date(startDate).toUTCString(),
    startDateFormatted
  );

  return (
    <div className="break-inside-avoid">
      <h3 className="text-lg font-bold pt-4 underline">{title}</h3>
      <List
        items={[
          <span>
            <b>{company}</b> · {employmentType}
          </span>,
          <span>
            {startDateFormatted}—{endDateFormatted} · {duration}
          </span>,
          <span>
            {location} · {commuteType}
          </span>,
        ]}
      />
    </div>
  );
}
