import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { TeamCard } from '@/components/TeamCard';

export default function TeamsPage() {
  //Get id of the recipe
  const router = useRouter();
  const { id } = router.query;
  const teams = useSelector((state) => state.teams.value);

  const selectedTeam = teams.find((team) => team.squad_id === id);
  console.log(selectedTeam);

  return <TeamCard squad={selectedTeam} />;
}
