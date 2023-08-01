import { Button, Heading, Paragraph } from "@/components"
import { Sparkles, Brain, Github } from "lucide-react"

export default function Home() {
  return (
    <main className="px-8">
      <header className="w-full h-96  mx-auto text-center flex flex-col justify-center items-center gap-6 md:w-3/5">
        <div className="w-fit py-1 px-2 bg-bg-nav dark:bg-bg-nav-dark border border-border-clr dark:border-border-clr-dark rounded-full select-none">
          <Sparkles className="inline-block w-4 mr-1 text-dim-text-dark" />
          <small className="text-dim-text-dark">Hi there. Welcome to <span className="text-clr-accent">Sitemark</span></small>
        </div>

        <h1 className="text-4xl text-text-clr dark:text-text-clr-dark font-medium"></h1>
        <Heading level="h1" className="text-4xl">Welcome to Sitemark - Your AI-Powered Writing Partner</Heading>
        <Paragraph>
          Unleash the potential of AI algorithms for expertly crafted essays. Our platform analyzes your ideas, refines your arguments, and generates well-structured papers with speed and precision. Let the synergy of human creativity and AI intelligence elevate your academic writing to new heights
        </Paragraph>

        <div className="flex flex-wrap gap-8">
          <Button>
            <Brain />
            <span>Generate</span>
          </Button>

          <Button invert={true}>
            <Github />
            <span>Github</span>
          </Button>
        </div>
      </header>

      <section>
        <Heading className="relative text-2xl underline">Features</Heading>
      </section>
    </main>
  )
}
