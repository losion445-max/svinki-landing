import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { ProblemSolutionResult } from "@/components/sections/problem-solution-result";
import { Problem } from "@/components/sections/problem";
import { Tech } from "@/components/sections/tech";
import { Economics } from "@/components/sections/economics";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolutionResult />
        <Problem />
        <Tech />
        <Economics />
      </main>
    </>
  );
}
