import Image from "next/image"
import Link from "next/link"
import { Clock } from "."
import { Hourglass, Github, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-bg-sec dark:bg-bg-sec-dark py-6 px-10">
      <div className="flex justify-between">
        <Image
          src="/images/Logo.svg"
          alt="Logo"
          width={120}
          height={120}
          priority
        />

        <ul className="flex items-center gap-4">
          <li>
            <Clock />
          </li>
          <li>
            <button className="p-2 bg-clr-accent-dim dark:bg-clr-accent-dim-dark rounded-full hover:animate-spin">
              <Hourglass />
            </button>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-6 pt-6 border-t border-border-clr dark:border-border-clr-dark">
        <span className="text-dim-text dark:text-dim-text-dark">
          &copy; {new Date().getFullYear()} Sitemark, All Rights Reserved
        </span>

        <div className="flex gap-3 text-clr-accent">
          <Link
            target="_blank"
            title="GitHub"
            href="https://github.com/usernameisleye/sitemark"
          >
            <Github />
          </Link>{" "}
          |
          <Link 
            target="_blank"
            title="Twitter"
            href="https://twitter.com/usernameisleye" 
          >
            <Twitter />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
