import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { ProblemSolutionResult } from "@/components/sections/problem-solution-result";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolutionResult />
      </main>
    </>
  );
}
