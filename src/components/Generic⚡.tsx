import { Brain } from "lucide-react"

type Props = {
  content: string
  className?: string
  disabled?: boolean
  click?: () => void
}

const Generic = ({ className, content, disabled, click }: Props) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`group relative bg-clr-accent h-max p-6 rounded-full overflow-hidden disabled:bg-clr-accent-dim disabled:dark:bg-clr-accent-dim-dark disabled:pointer-events-none ${className}`}
    >
      <span className="absolute inset-0 top-1/4 group-hover:-translate-x-96 duration-200">
        {content}
      </span>
      <Brain className="inline-block absolute inset-0 m-auto translate-x-96 group-hover:translate-x-0 duration-500" />
    </button>
  )
}

export default Generic
