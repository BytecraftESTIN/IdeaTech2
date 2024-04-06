import HomePage from "../components/HomePage";
import Sponsors from "../components/Sponsors";
import Mentors from "../components/Mentors";
import Agenda from "../components/Agenda";
import Boxes from "../components/Boxes";

export default function Home() {
  return (
    <main className="flex w-[500vw]">
      <HomePage />
      <Boxes />
      <Sponsors />
      <Mentors />
      <Agenda />
    </main>
  );
}
