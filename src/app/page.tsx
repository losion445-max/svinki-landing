import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { ProblemSolutionResult } from "@/components/sections/problem-solution-result";
import { Problem } from "@/components/sections/problem";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolutionResult />
        <Problem />
      </main>
    </>
  );
}
