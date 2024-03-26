import Boxes from "../components/Boxes";
import HomePage from "../components/HomePage";
import Sponsors from "../components/Sponsors";
import Mentors from "../components/Mentors";
import Agenda from "../components/Agenda";

export default function Home() {
  return (
    <main>
      <HomePage />
      <Boxes />
      <Sponsors />
      <Mentors />
      <Agenda />
    </main>
  );
}
