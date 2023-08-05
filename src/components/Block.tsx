import { Heading, Paragraph } from "."
import { FeaturesType } from "@/constants"

const Block = ({ data }: { data: FeaturesType }) => {
  const { index, header, content } = data
  return (
    <article className="p-6 border border-border-clr dark:border-border-clr-dark rounded-lg cursor-pointer hover:bg-bg-sec hover:dark:bg-bg-sec-dark select-none">
      <div className="flex items-center justify-between mb-4">
        <Heading className="text-4xl">{index}</Heading>
        <Heading className="text-xl text-clr-accent text-right">{header}</Heading>
      </div>
      <Paragraph className="text-left">{content}</Paragraph>
    </article>
  )
}

export default Block
