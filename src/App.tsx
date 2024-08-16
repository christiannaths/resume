import { type TJob } from "./components/Job";
import { Job } from "./components/Job";
import { List } from "./components/List";
import experienceData from "./data/experience.csv?raw";
import { parse } from "csv-parse/browser/esm/sync";

function Section({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <h2 className="text-2xl font-bold pt-6">{title}</h2>
      {children}
    </section>
  );
}

function App() {
  const experience: TJob[] = parse(experienceData, { columns: true });

  return (
    <article className="container max-w-prose mx-auto px-4 py-4">
      <header className="pt-8">
        <h1 className="text-3xl font-bold">Christian Naths</h1>
        <p>Senior Software Developer</p>
        <List
          className="text-sm pt-2"
          items={[
            <a href="mailto:christiannaths@gmail.com">
              christiannaths@gmail.com
            </a>,
            <a href="https://www.linkedin.com/in/christiannaths">
              https://www.linkedin.com/in/christiannaths
            </a>,
            <a href="tel:+50230834103">+502 3083-4103</a>,
            "Timezone: UTC-6 (+/- 2hrs)",
          ]}
        ></List>
      </header>
      <Section title="Summary">
        <p className="pt-2">
          I began working professionally in web and software design &
          development in 2001. Since 2015 I have maintained a full-time, focused
          effort towards helping founders of early-stage startups bring their
          product ideas to market.
        </p>

        <p className="pt-2">
          I also fit very well into productive and cooperative development teams
          as a senior developer or dev lead. I take pride in writing
          maintainable code and providing thorough and helpful code reviews to
          keep team efforts on track and in-line with company business
          objectives.
        </p>
      </Section>
      <Section title="Skills">
        <p className="pt-2">
          Typescript, React, Next.js, Jest, NodeJS, Python, Ruby, PostgreSQL,
          NoSQL, Big Query, Databricks, Kubernetes, Google Cloud
        </p>
      </Section>
      <Section title="Experience">
        {experience.map((job: TJob, index: number) => (
          <Job key={index} {...job} />
        ))}
      </Section>
      <Section title="Education">
        <h3 className="text-lg font-bold pt-4 underline">
          Digital Media Design
        </h3>
        <List
          items={[
            <span>
              <b>Northern Alberta Institute of Technology</b> · Diploma
            </span>,
            <span>2007 - 2009</span>,
          ]}
        />
      </Section>
    </article>
  );
}

export default App;
