import { useMemo, useState, useEffect } from 'react';
import importedData from './data/default.json';
import { formatTimespan } from './utils';
import { Icon } from './components/Icons';

function useLocation() {
  const location = useMemo(() => {
    return window.location;
  }, []);

  return location;
}

function useDynamicData(hash: string) {
  const [data, setData] = useState(importedData);

  useEffect(() => {
    if (!hash) return;
    const importData = async () => {
      const path = `./data/${hash.replace('#', '')}.json`;
      const altData = await import(path);
      setData(altData.default);
    };

    importData();
  }, []);

  return data;
}

const styles = {
  pageTitle: 'text-4xl font-bold',
  pageSubtitle: 'text-2xl italic mt-2',
  h2: 'text-xl font-bold mt-16',
  h3: 'text-md font-bold mt-4',
};

function App() {
  const { hash } = useLocation();
  const data = useDynamicData(hash);

  return (
    <main
      itemScope
      itemType="http://schema.org/Person"
      className="px-4 py-16 leading-6 max-w-[8.5in] mx-auto"
    >
      <header className="mb-16">
        <hgroup>
          <h1 className={styles.pageTitle} itemProp="name">
            {data.name}
          </h1>
          <p className={styles.pageSubtitle} itemProp="jobTitle">
            {data.jobTitle}
          </p>
        </hgroup>

        <ul className="mt-4 leading-8 md:grid md:grid-cols-[max-content_max-content] md:gap-x-4 print:grid print:grid-cols-[max-content_max-content] print:gap-x-4">
          {data.links.map(link => {
            return (
              <li key={link.value}>
                <a
                  href={link.value}
                  target="_blank"
                  itemProp="url"
                  className="whitespace-nowrap"
                >
                  <Icon className="inline-block mr-2" type={link.type} />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </header>

      <section>
        <h2 className={styles.h2}>Profile</h2>
        {data.summary.map((text, index) => {
          return (
            <p key={index} itemProp="description">
              {text}
            </p>
          );
        })}
      </section>

      <section>
        <h2 className={styles.h2}>Technical Skills</h2>

        <ul className="list-none flex flex-wrap gap-2">
          {data.skills.map(skill => {
            return (
              <li
                key={skill.type + skill.label}
                className="border-2 rounded border-black p-2"
              >
                {skill.label}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="experience">
        <h2 className={styles.h2}>Experience</h2>
        {data.experience.map(job => {
          return (
            <div className="break-inside-avoid">
              <hgroup>
                <h3 className={styles.h3}>{job.title}</h3>
                <p className="italic">
                  {job.company} • {job.location}
                </p>
              </hgroup>
              <p>{formatTimespan(job.startDate, job.endDate)}</p>
              <ul className="list-disc ml-3 pl-3">
                {job.highlights.map((highlight, index) => {
                  return <li key={index}>{highlight}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>

      <section className="education">
        <h2 className={styles.h2}>Education</h2>

        {data.education.map(item => {
          return (
            <span key={item.institution}>
              <h3 className={styles.h3}>{item.institution}</h3>
              <p>
                {item.studyType}, {item.major}
              </p>
              <p>{formatTimespan(item.startDate, item.endDate)}</p>
            </span>
          );
        })}
      </section>
    </main>
  );
}

export default App;
