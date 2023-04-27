
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Inter } from 'next/font/google';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import { fetchTeamsAsync } from '@/store/teamsSlice';
import { fetchPlayersAsync } from '@/store/playersSlice';


const inter = Inter({ subsets: ['latin'] });

import { Layout } from '@/components/Layout';

export default function Home() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.value);

  useEffect(() => {
    dispatch(fetchTeamsAsync());
    dispatch(fetchPlayersAsync());
  }, []);
  return (
    <div>
      <Layout>

        <Grid>
          {teams
            ? teams.map((team) => {
                return (
                  <Card
                    squad={team.squad}
                    url_imagen={team.url_imagen}
                    squad_id={team.squad_id}
                    key={team.squad_id}
                  />
                );
              })
            : null}
        </Grid>

      </Layout>
    </div>
  );
}
