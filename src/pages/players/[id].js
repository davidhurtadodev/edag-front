import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function PlayersPage() {
  //Get id of the recipe
  const router = useRouter();
  const { id } = router.query;
  const players = useSelector((state) => state.players.value);

  const selectedPlayer = players.find((player) => player.squad_id === id);
}
