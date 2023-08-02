import { Brain } from "lucide-react"

type Props = {
  content: string
  className?: string
}

const Generic = ({ className, content }: Props) => {
  return (
    <button
      className={`group relative bg-clr-accent h-max p-6 rounded-full overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 top-1/4 group-hover:-translate-x-96 duration-200">
        {content}
      </span>
      <Brain className="inline-block absolute inset-0 m-auto translate-x-96 group-hover:translate-x-0 duration-500" />
    </button>
  )
}

export default Generic
