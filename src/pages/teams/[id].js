import { useRouter } from 'next/router';

export default function TeamsPage() {
  //Get id of the recipe
  const router = useRouter();
  const { id } = router.query;
}
