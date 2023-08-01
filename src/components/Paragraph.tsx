type Props = {
    children: React.ReactNode
    className?: string
}

const Paragraph = ({ children, className } : Props) => {
  return <p className={`text-base text-dim-text dark:text-dim-text-dark leading-6 ${className}`}>{children}</p>
}

export default Paragraph