import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Layout } from "@/components/Layout";
import { TeamCard } from "@/components/TeamCard";

export default function Home() {
  return (
    <div>
      <Layout>
        <TeamCard />
      </Layout>
    </div>
  );
}
