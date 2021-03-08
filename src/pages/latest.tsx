import { EffectCallback, useEffect } from 'react';
import { Layout } from '../components/layout';
import { Latest } from '../components/related';

import styles from '../styles/post.css';

export default function Post(): JSX.Element {
  return (
    <Layout>
      <Latest />
    </Layout>
  );
}
