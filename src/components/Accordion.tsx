"use client"

import { Heading } from "."
import { useState } from "react"
import { QuestionType } from "@/constants"
import { ChevronDownCircle } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const Accordion = ({ question }: { question: QuestionType }) => {
  const { header, content } = question
  const [open, setOpen] = useState(false)

  const bodyVariant = {
    initial: {
      opacity: 0,
      height: 0,
    },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        dampness: 20,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
    },
  }

  return (
    <div>
      <article
        onClick={() => setOpen(!open)}
        className={`group p-4 border bg-bg-sec dark:bg-bg-sec-dark border-border-clr dark:border-border-clr-dark rounded-lg cursor-pointer ${
          open && "border-clr-accent dark:border-clr-accent"
        }`}
      >
        <div className="flex items-center gap-2 justify-between">
          <Heading
            className={`w-11/12 group-hover:text-clr-accent ${
              open && "text-clr-accent"
            }`}
          >
            {header}
          </Heading>

          <ChevronDownCircle
            className={`duration-200 ${open && "rotate-180"}`}
          />
        </div>

        <AnimatePresence>
          {open && (
            <motion.p
              variants={bodyVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="overflow-hidden leading-8 mt-4 h-auto"
            >
              {content}
            </motion.p>
          )}
        </AnimatePresence>
      </article>
    </div>
  )
}

export default Accordion
