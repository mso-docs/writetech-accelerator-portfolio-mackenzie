import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Mackenzie.TechDocs
        </Heading>
        <p className="hero__subtitle">
          Senior Technical Writer | Documentation Architect | Portfolio
        </p>
        <p className={styles.intro}>
          Welcome! I’m Mackenzie, a senior technical writer specializing in developer documentation, API guides, and technical content strategy. Explore my portfolio to see case studies, writing samples, and my approach to clear, effective documentation.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/portfolio">
            View Portfolio
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/about">
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Mackenzie.TechDocs | Senior Technical Writer Portfolio"
      description="Portfolio and case studies of Mackenzie, a senior technical writer and documentation architect.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
