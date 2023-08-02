import { Generic, Heading, Paragraph, Result } from "@/components"

export default function Generate() {
  return (
    <main id="main-content" className="px-8 md:w-4/5 mx-auto">
      <section className="my-16">
        <header className="text-center">
          <Heading className="text-3xl">
            Sitemark - Your AI-Powered{" "}
            <span className="text-clr-accent">Writing Companion</span>
          </Heading>
          <Paragraph className="md:w-3/5 mx-auto my-4">
            Create well-structured and compelling academic papers effortlessly.
            Let our advanced algorithms assist you in crafting top-notch essays
            on any topic
          </Paragraph>
        </header>

        <div className="flex justify-center md:w-3/5 mx-auto bg-bg-dim dark:bg-bg-dim-dark p-2 rounded-full">
          <input
            id="topic"
            type="text"
            className="grow bg-transparent outline-none px-4"
            placeholder="Input topic or subject of essay/report"
          />
          <Generic content="Generate⚡" className="w-1/3 md:w-1/4" />
        </div>
      </section>

      <section className="my-16">
        <Result content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis mollitia saepe fugiat obcaecati commodi dolore est doloribus expedita facilis, ex quisquam cumque tempora ut repellat, dolor asperiores rerum unde? obcaecati commodi dolore est doloribus expedita facilis, ex quisquam cumque tempora ut repellat, dolor asperiores rerum unde?" />
      </section>
    </main>
  )
}
