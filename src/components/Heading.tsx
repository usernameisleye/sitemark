type Props = {
  level?: string
  className?: string
  children: React.ReactNode
}

const Heading = ({ level = "h2", className, children }: Props) => {
  const classNames = `${className} font-medium`
  const getNode = () => {
    switch (level) {
      case "h1":
        return <h1 className={`${classNames}`}>{children}</h1>
      case "h2":
        return <h2 className={`${classNames}`}>{children}</h2>
      case "h3":
        return <h3 className={`${classNames}`}>{children}</h3>
      case "h4":
        return <h4 className={`${classNames}`}>{children}</h4>
      default:
        return <h2 className={`${classNames}`}>{children}</h2>
    }
  }
  return getNode()
}

export default Heading
