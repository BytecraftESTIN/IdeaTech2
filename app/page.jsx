import HomePage from "../components/HomePage";
import Sponsors from "../components/Sponsors";
import Mentors from "../components/Mentors";
import Agenda from "../components/Agenda";
import Boxes_Section from "@/components/_Boxes_Section/Boxes_Section";

export default function Home() {
  return (
    <main className="flex w-[500vw]">
      <HomePage />
      <Boxes_Section/>
      <Sponsors />
      <Mentors />
      <Agenda />
    </main>
  );
}
