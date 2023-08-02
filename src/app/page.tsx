import Link from "next/link"
import { Features } from "@/constants"
import { Sparkles, Brain, Github } from "lucide-react"
import { Block, Button, Heading, Paragraph } from "@/components"

export default function Home() {
  return (
    <main id="main-content" className="px-8">
      <header className="w-full my-10 mx-auto text-center flex flex-col justify-center items-center gap-6 md:w-3/5">
        <div className="w-fit py-1 px-2 bg-bg-sec dark:bg-bg-sec-dark border border-border-clr dark:border-border-clr-dark rounded-full select-none">
          <Sparkles
            size={20}
            className="inline-block mr-1 text-dim-text-dark"
          />
          <small className="text-dim-text-dark">
            Hi there. Welcome to{" "}
            <span className="text-clr-accent">Sitemark</span>
          </small>
        </div>

        <h1 className="text-4xl text-text-clr dark:text-text-clr-dark font-medium"></h1>
        <Heading level="h1" className="text-4xl">
          Welcome to Sitemark - Your AI-Powered Writing Partner
        </Heading>
        <Paragraph>
          Unleash the potential of AI algorithms for expertly crafted essays.
          Our platform analyzes your ideas, refines your arguments, and
          generates well-structured papers with speed and precision. Let the
          synergy of human creativity and AI intelligence elevate your academic
          writing to new heights
        </Paragraph>

        <div className="flex flex-wrap gap-8">
          <Link href="generate">
            <Button>
              <Brain />
              <span>Generate</span>
            </Button>
          </Link>

          <Link
            href="https://github.com/usernameisleye/sitemark"
            target="_blank"
          >
            <Button invert={true}>
              <Github />
              <span>Github</span>
            </Button>
          </Link>
        </div>
      </header>

      <section className="my-10">
        <Heading className="relative text-3xl underline">Features</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {Features.map((feature, i) => (
            <Block key={i} data={feature} />
          ))}
        </div>
      </section>
    </main>
  )
}
