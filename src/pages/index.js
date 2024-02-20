import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className="preamble">
          <p>
            New Vegas Reloaded is a custom graphical extender for Obsidian's "Fallout: New Vegas"</p>
          <p>
            It overrides the rendering pipeline to inject various effects that can be completely configured
          </p>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
            className="getting-started-button" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="New Vegas Reloaded is a custom graphical extender for Obsidian's 'Fallout: New Vegas'">
      <HomepageHeader />
    </Layout>
  );
}
