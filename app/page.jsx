 import HomePage from "../components/HomePage";
import Boxes from "/components/boxes";
import Sponsors from "../components/sponsors";
import Mentors from "../components/mentors";
import Agenda from "/components/agenda";

export default function Home() {
  return (
    <main className="">
        <HomePage />
        <Boxes />
        <Sponsors />
        <Mentors />
        <Agenda />
    </main>
  );
}
