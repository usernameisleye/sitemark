"use client"

import { Markup } from "interweave"
import useClipboard from "react-use-clipboard"
import { Check, ClipboardList } from "lucide-react"
import { useEffect, useState } from "react"

const Result = ({ content }: { content: string }) => {
  const [text, setText] = useState<string>("")
  const [copy, setCopy] = useClipboard(content)
  
  let indx = 0
  let speed = 20
  useEffect(() => {
    if(!content || content === undefined) return
    const interval = setInterval(() => {
      setText((prevText) => prevText + content[indx])
      indx++

      if (indx === content.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [content, speed])

  const count = (data: string) => {
    const words = data.trim().split(/\s/)
    return words.length
  }

  return (
    <div className="relative rounded-md text-justify bg-bg-sec dark:bg-bg-dim-dark p-6 transition">
      <button
        title="Copy"
        onClick={setCopy}
        className="absolute -top-8 right-0 py-2 px-4 z-20 bg-bg-sec dark:bg-bg-dim-dark text-clr-accent rounded-t-md transition"
      >
        {copy ? <Check /> : <ClipboardList />}
      </button>

      <div className="absolute -top-8 left-0 p-2 w-12 z-20 text-center bg-bg-sec dark:bg-bg-dim-dark text-clr-accent rounded-t-md">
        <span>{count(text)}</span>
      </div>

      <Markup
        content={text}
        className="selection:bg-clr-accent selection:text-bg-dim-dark"
      />
    </div>
  )
}

export default Result
