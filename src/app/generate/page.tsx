"use client"

import { useState } from "react"
import { data } from "@/constants"
import toast from "react-hot-toast"
import { FlaskConical, Ruler } from "lucide-react"
import { Generic, Heading, Paragraph, Result, Toast } from "@/components"

export default function Generate() {
  const [count, setCount] = useState<number>(0)
  const [show, setShow] = useState<boolean>(false)
  const [prompt, setPrompt] = useState<string>("")
  const [length, setLength] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(false)

  const check = (value: any) => {
    const regex = /^\d+$/
    if(!regex.test(value)) throw new Error("Lenght should be a number")
  }

  const counting = () => {
    setCount((prev) => prev + 1)
    if(count >= 5) {
      setDisabled(true)
      return
    }
  }

  const test = () => {
    setPrompt("World War II")
    setLength("480")
    setContent(data)
  }

  const generate = async () => {
    counting()
    setDisabled(true)
    setContent("")

    try {
      if (!prompt) throw new Error("Enter a topic for generation")
      if(!length) setLength("20")
      check(+length)

      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, length }),
      }

      const r = await fetch("api/generate", options)
      if (!r.ok || r.status !== 200) throw new Error("Error generating content, Try testing🧪")

      const { data } = await r.json()
      setContent(data)
    } catch (er: any) {
      toast.error(er.message)
    } finally {
      setDisabled(false)
      setLength("")
    }
  }

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
            on any topic.
          </Paragraph>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <div className="flex justify-center gap-1 grow-0 md:grow-0 w-full md:w-3/5 bg-bg-sec dark:bg-bg-dim-dark p-2 rounded-full">
            <input
              id="topic"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="grow bg-transparent rounded-full outline-none px-4"
              placeholder="Input topic or subject of essay/report (e.g WWII)"
            />
            <Generic
              click={generate}
              disabled={disabled}
              content="Generate⚡"
              className="w-3/5 md:1/4 lg:w-1/3"
            />
          </div>

          <div className="relative flex gap-4">
            <button 
              title="Length of report"
              onClick={() => setShow(!show)}
              className="w-14 h-14 grid place-items-center p-2 bg-clr-accent-dim dark:bg-clr-accent-dim-dark rounded-full border border-clr-accent"
            >
              <Ruler />
            </button>
            <input 
              id="length"
              type="text" 
              maxLength={3}
              value={length}
              placeholder="210?"
              inputMode="numeric"
              onChange={(e) => setLength(e.target.value)}
              className={`appearance-none absolute  bg-bg-sec dark:bg-bg-dim-dark w-14 h-14 p-3 outline-none rounded-md duration-200 -z-10 ${show ? "-bottom-16 opacity-100 z-0" : "bottom-0 opacity-0"}`}
            />

            <button 
              onClick={test}
              title="Test Sitemark"
              className="w-14 h-14 grid place-items-center p-2 bg-clr-accent-dim dark:bg-clr-accent-dim-dark rounded-full border border-clr-accent"
            >
              <FlaskConical />
            </button>
          </div>
        </div>
      </section>

      <section className="mt-24 mb-16">
        <Result content={content} />
      </section>
      <Toast />
    </main>
  )
}
