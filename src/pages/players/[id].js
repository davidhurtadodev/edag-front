import { useRouter } from 'next/router';

export default function PlayersPage() {
  //Get id of the recipe
  const router = useRouter();
  const { id } = router.query;
}
