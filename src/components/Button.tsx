type Props = {
    children: React.ReactNode
    className?: string
    invert?: boolean
}

const Button = ({ children, className, invert } : Props) => {
  return (
    <button 
        className={`${
            invert
            ? "bg-clr-accent-dim border border-clr-accent"
            : "bg-clr-accent"
        } p-4 rounded-md flex justify-center gap-3 w-36 outline-none ${className} duration-200 hover:scale-105`}
    >
        {children}
    </button>
  )
}

export default Button