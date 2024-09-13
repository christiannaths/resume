import { Subtitle } from './components/Subtitle';
import { Job, type Job as JobType } from './components/Job';
import { Section } from './components/Section';
import { Container } from './components/Container';
import { List } from './components/List';
import { TimelineEvent } from './components/Timeline';
import experienceData from './data/experience.json';
import profileImage from './assets/profile.jpg';

const EXPERIENCE_LIMIT = 5;

function App() {
  const experience: JobType[] = experienceData.slice(0, EXPERIENCE_LIMIT);

  return (
    <article className="pb-16 text-md print:text-sm source-sans-3 text-slate-800 text-pretty">
      <header className="bg-gray-100">
        <Container className="pt-24">
          <div className="text-center col-span-2">
            <div className="overflow-hidden w-full rounded-full">
              <img
                className="w-full h-full scale-125"
                src={profileImage}
                alt="Photo of Christian Naths"
              />
            </div>
          </div>
          <div className="col-span-6">
            <h1 className="text-3xl font-bold">Christian Naths</h1>
            <Subtitle className="text-lg leading-none">
              Senior Software Developer
            </Subtitle>

            <div className="text-sm my-5 text-gray-700 grid grid-cols-[max-content,auto] gap-x-4">
              <div>
                <a href="mailto:christiannaths@gmail.com">christiannaths@gmail.com</a>
              </div>
              <div>
                <a href="https://github.com/christiannaths">
                  github.com/christiannaths
                </a>
              </div>
              <div>
                <span>Timezone: UTC-6 (+/- 2hrs)</span>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/christiannaths">
                  linkedin.com/in/christiannaths
                </a>
              </div>
            </div>

            <p className="mt-2">
              I began working professionally in web and software design & development in
              2001. Since 2015 I have focused my efforts towards helping founders of
              early-stage startups bring their product ideas to market.
            </p>

            <p className="mt-2">
              I take pride in writing maintainable code and providing thorough and
              helpful code reviews to keep team efforts on track and in-line with
              company business objectives.
            </p>
          </div>
        </Container>
        <svg
          className="w-full fill-white print:hidden"
          viewBox="0 0 1440 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,18 C443,38 923,32 1440,1 L1440,32 L0,32 Z" />
        </svg>
      </header>

      <hr className="hidden print:block mt-8" />

      <Section title="Skills">
        <p className="mt-1">
          Typescript, React, Next.js, Jest, NodeJS, Python, Ruby, PostgreSQL, NoSQL, Big
          Query, Databricks, Kubernetes, Google Cloud
        </p>
      </Section>
      <Section title="Experience">
        <div className="mt-2">
          {experience.map((job, index) => (
            <TimelineEvent
              key={index}
              className="[&+*]:pt-4"
              event={{
                title: job.company,
                startDate: job.startDate,
                endDate: job.endDate,
              }}
              showDuration
            >
              <Job job={job} />
            </TimelineEvent>
          ))}
        </div>
      </Section>
      <Section title="Education">
        <TimelineEvent
          className="mt-2"
          event={{
            title: 'Northern Alberta Institute of Technology',
            startDate: '2007-09-05',
            endDate: '2009-04-28',
          }}
        >
          <List
            items={[
              <span>Digital Media Design · Diploma</span>,
              <span>Edmonton, Canada</span>,
            ]}
          />
        </TimelineEvent>
      </Section>
    </article>
  );
}

export default App;
