import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Inter } from 'next/font/google';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import { fetchTeamsAsync } from '@/store/teamsSlice';

const inter = Inter({ subsets: ['latin'] });

import { Layout } from '@/components/Layout';

export default function Home() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.value);
  console.log(teams);
  useEffect(() => {
    dispatch(fetchTeamsAsync());
  }, []);
  return (
    <div>
      <Layout>
        <Grid></Grid>
      </Layout>
    </div>
  );
}
