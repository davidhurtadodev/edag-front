import { Inter } from 'next/font/google';
import { Card } from '@/components/Card';
import { Grid } from '@/components/Grid';

const inter = Inter({ subsets: ['latin'] });

import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
}
