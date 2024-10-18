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
      <h3 className="font-bold">{job.title}</h3>
      <address>
        <strong>{job.company}</strong>
        <br />
        {job.location}
      </address>
      <List className="list-disc ml-4" items={job.highlights} />
    </div>
  );
}
