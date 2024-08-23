import { Subtitle } from './components/Subtitle';
import { Job, type Job as JobType } from './components/Job';
import { Section } from './components/Section';
import { List } from './components/List';
import { TimelineEvent } from './components/Timeline';
import { FontPicker } from './components/FontPicker';
import experienceData from './data/experience.json';
import profileImage from './assets/profile.jpg';

const EXPERIENCE_LIMIT = 5;

function App() {
  const experience: JobType[] = experienceData.slice(0, EXPERIENCE_LIMIT);

  return (
    <FontPicker className="print:hidden">
      {font => (
        <article
          className={`container w-[8.5in] mx-auto px-4 py-4 text-md print:text-sm ${font} text-slate-800`}
        >
          <header className="pt-8 grid grid-cols-8 mb-8 gap-8">
            <div className="text-center col-span-2">
              <img
                className="w-40 h-40 rounded-full inline-block scale-x-100 print:scale-y-[0.95]"
                src={profileImage}
                alt="Christian Naths"
              />
            </div>
            <div className="col-span-6">
              <h1 className="text-3xl font-bold">Christian Naths</h1>
              <Subtitle className="text-lg">Senior Software Developer</Subtitle>

              <p className="mt-2">
                I began working professionally in web and software design & development
                in 2001. Since 2015 I have focused my efforts towards helping founders
                of early-stage startups bring their product ideas to market.
              </p>

              <p className="mt-2">
                I take pride in writing maintainable code and providing thorough and
                helpful code reviews to keep team efforts on track and in-line with
                company business objectives.
              </p>

              <div className="text-sm mt-3 text-gray-700 grid grid-cols-[max-content,auto] gap-x-4">
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
            </div>
          </header>

          <Section title="Skills">
            <p className="mt-1">
              Typescript, React, Next.js, Jest, NodeJS, Python, Ruby, PostgreSQL, NoSQL,
              Big Query, Databricks, Kubernetes, Google Cloud
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
      )}
    </FontPicker>
  );
}

export default App;
