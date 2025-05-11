import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello! I&apos;m Amy</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a PhD student in{" "}
        <Highlight>harmonic analysis</Highlight> at the University of Birmingham, supervised by Professor Jonathan Bennett.
      </Paragraph>
  
      
    </Container>
  );
}
