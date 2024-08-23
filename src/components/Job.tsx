import { List } from './List';

export type Job = {
  title: React.ReactNode;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location: string;
  commuteType: string;
  highlights: string[];
};

type Props = {
  job: Job;
  className?: string;
};

export function Job({ job, className = '' }: Props) {
  return (
    <div className={className}>
      <List
        items={[
          <span>
            <span className="font-medium text-gray-500">{job.title}</span>
          </span>,
          <span>
            {job.location} ({job.employmentType} · {job.commuteType})
          </span>,
        ]}
      />
      <List className="list-disc ml-4" items={job.highlights} />
    </div>
  );
}
