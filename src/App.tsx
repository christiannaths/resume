import { useMemo, useState, useEffect } from 'react';
import { Subtitle } from './components/Subtitle';
import { Job, type Job as JobType } from './components/Job';
import { Section } from './components/Section';
import { Container } from './components/Container';
import { List } from './components/List';
import { TimelineEvent } from './components/Timeline';
import importedData from './data/data.json';
import profileImage from './assets/profile.jpg';

const EXPERIENCE_LIMIT = 5;

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
      const pathPrefix = `./data/${hash.replace('#', '')}`;
      const altData = await import(`${pathPrefix}/data.json`);

      setData(altData.default);
    };

    importData();
  }, []);

  return data;
}

function App() {
  // const experience: JobType[] = experienceData.slice(0, EXPERIENCE_LIMIT);

  const { hash } = useLocation();
  const data = useDynamicData(hash);

  console.log(hash, data);

  return (
    <>
      <main className="page" itemScope itemType="http://schema.org/Person">
        <header>
          <h1 itemProp="name">{data.name}</h1>
          <span itemProp="jobTitle">{data.jobTitle}</span>

          <ul>
            {data.links.map(link => {
              return (
                <li key={link.value}>
                  <a href={link.value} target="_blank" itemProp="url">
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </header>

        <section>
          <h2>Technical Skills</h2>

          <ul>
            <li>
              Languages:
              {data.skills
                .filter(skill => skill.type === 'language')
                .map(skill => {
                  return (
                    <span
                      key={skill.type + skill.label}
                      itemScope
                      itemType="http://schema.org/Language"
                    >
                      {skill.label}{' '}
                    </span>
                  );
                })}
            </li>

            <li>
              Databases:
              {data.skills
                .filter(skill => skill.type === 'database')
                .map(skill => {
                  return <span key={skill.type + skill.label}>{skill.label} </span>;
                })}
            </li>
            <li>
              Frameworks:
              {data.skills
                .filter(skill => skill.type === 'framework')
                .map(skill => {
                  return <span key={skill.type + skill.label}>{skill.label} </span>;
                })}
            </li>
            <li>
              Tools:
              {data.skills
                .filter(skill => skill.type === 'tool')
                .map(skill => {
                  return <span key={skill.type + skill.label}>{skill.label} </span>;
                })}
            </li>
          </ul>
        </section>

        <section className="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              Semi-finalist in the 2015 Global Venture Labs Investment Competition,
              <time>2015</time>
            </li>
            <li>
              Teaching Assistant for four undergraduate engineering courses at CUHK,
              <time>2012-2015</time>
            </li>
            <li>
              Volunteer for the
              <span
                itemProp="worksFor"
                itemScope
                itemType="http://schema.org/Organization"
              >
                <span itemProp="name">
                  Charles K Kao Foundation for Alzheimer’s Disease
                </span>
                ,
              </span>
              <time>2011</time>
            </li>
            <li>
              Organizer of the 6th Information Security and Countermeasures Contest,{' '}
              <time>2010</time>
            </li>
            <li>
              Meritorious Winner in <em>Mathematical Contest In Modeling</em>,{' '}
              <time>2009</time>
            </li>
          </ul>
        </section>

        <section className="education">
          <h2>Education</h2>

          <details open>
            <summary>
              <span
                itemProp="alumniOf"
                itemScope
                itemType="http://schema.org/EducationalOrganization"
              >
                <span itemProp="name">Northern Alberta Institute of Technology</span>
                <span itemProp="location" itemScope itemType="http://schema.org/Place">
                  <span itemProp="address">
                    <span itemProp="addressLocality">Edmonton</span>,
                    <span itemProp="addressRegion">Alberta</span>
                  </span>
                </span>
              </span>
              <time>2007 - 2009</time>
              <span
                itemProp="hasCredential"
                itemScope
                itemType="http://schema.org/EducationalOccupationalCredential"
              >
                <h1 itemProp="name">Digital Media Design</h1>
                <span itemProp="credentialCategory">Diploma</span>
                <div
                  itemProp="credentialCategory"
                  itemScope
                  itemType="https://schema.org/DefinedTerm"
                >
                  <meta itemProp="name" content="Certification" />
                  <link
                    itemProp="url"
                    href="http://purl.org/ctdl/terms/Certification"
                  />
                  <div
                    itemProp="inDefinedTermSet"
                    itemScope
                    itemType="https://schema.org/DefinedTermSet"
                  >
                    <meta
                      itemProp="name"
                      content="Credential Transparency Description Language"
                    />
                    <link itemProp="url" content="http://purl.org/ctdl/terms/" />
                  </div>
                </div>
                <link
                  itemProp="additionalType"
                  href="http://purl.org/ctdl/terms/Certification"
                />
                <span itemProp="credentialCategory">Digital Media Design</span>
              </span>
            </summary>
          </details>
        </section>
      </main>
    </>
  );
}

export default App;
