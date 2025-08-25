import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Craft Clear Experiences',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Transform complex ideas into user-friendly documentation that empowers developers, customers, and stakeholders.
      </>
    ),
  },
  {
    title: 'Showcase Your Impact',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        From API references to UX research, highlight projects that demonstrate your ability to drive clarity and adoption across industries.
      </>
    ),
  },
  {
    title: 'Professional By Design',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Built on modern tools like React and Docusaurus, your portfolio reflects the same precision, structure, and scalability as your docs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureSvgWrapper}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
