import Link from "next/link"
import { Questions } from "@/constants"
import { Accordion, Heading, Paragraph } from "@/components"

export default function FAQs() {
  return (
    <main id="main-content" className="px-8 md:w-4/5 mx-auto">
      <header className="text-center my-16">
        <Heading className="text-3xl">
          Frequently Asked <span className="text-clr-accent">Questions</span>
        </Heading>
        <Paragraph className="md:w-3/5 mx-auto my-4">
          Here, is a compiled list of common inquiries to help you find quick
          answers to your queries. If you can't find what you're looking for,
          feel free to reach out to us directly on the{" "}
          <Link href="feedback" className="text-clr-accent underline">
            Feedback page
          </Link>
        </Paragraph>
      </header>

      <section className="grid gap-4 my-16">
        {Questions.map((question, i) => (
          <Accordion key={i} question={question} />
        ))}
      </section>
    </main>
  )
}
