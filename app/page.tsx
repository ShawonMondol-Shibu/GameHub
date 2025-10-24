import Header from "@/components/layout/Header";
import { Newsletter } from "@/components/layout/Newsletter";
import PopulerGames from "@/components/layout/PopulerGames";

export default function Home() {
  return (
    <main>
      <Header />
      <PopulerGames />
      <Newsletter/>
    </main>
  );
}
