import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { ProblemSolutionResult } from "@/components/sections/problem-solution-result";
import { Problem } from "@/components/sections/problem";
import { Tech } from "@/components/sections/tech";
import { Economics } from "@/components/sections/economics";
import { Contacts } from "@/components/sections/contacts";
import { Footer } from "@/components/layout/footer";

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
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
