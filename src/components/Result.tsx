"use client"

import { Markup } from "interweave"
import { Check, ClipboardList } from "lucide-react"
import useClipboard from "react-use-clipboard"

const Result = ({ content }: { content: string }) => {
  const [copy, setCopy] = useClipboard(content)
  return (
    <div className="relative rounded-md text-justify bg-bg-dim dark:bg-bg-dim-dark p-6 transition">
      <button
        onClick={setCopy}
        className="absolute -top-8 right-0 py-2 px-4 z-20 bg-bg-dim dark:bg-bg-dim-dark text-clr-accent rounded-t-md transition"
      >
        {copy ? <Check /> : <ClipboardList />}
      </button>

      <Markup content={content} />
    </div>
  )
}

export default Result
