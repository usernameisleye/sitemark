"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Generic } from "."
import { AlignRight, X } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname()
  const [show, setShow] = useState(false)
  const links = [
    {
      href: "/faqs",
      name: "FAQs",
    },
    {
      href: "/feedback",
      name: "Feedback",
    },
  ]

  return (
    <div className="m-8">
      <nav className="relative flex justify-between p-4 bg-bg-sec dark:bg-bg-sec-dark border border-border-clr dark:border-border-clr-dark rounded-full">
        <Link href="/" className="grid place-items-center">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={120}
            height={120}
            priority
          />
        </Link>

        <button
          onClick={() => setShow(!show)}
          className="block p-3 rounded-full bg-clr-accent md:hidden"
        >
          {show ? <X /> : <AlignRight />}
        </button>

        <ul
          className={`flex justify-between items-center gap-6 absolute left-1/2 -translate-x-1/2 w-full bg-bg-sec dark:bg-bg-sec-dark p-3 border border-border-clr-dark rounded-full duration-200 md:justify-end md:static md:translate-x-0 md:bg-transparent md:p-0 md:border-none md:w-1/2 md:opacity-100 md:z-0 ${
            show ? "-bottom-full opacity-100" : "bottom-0 opacity-0 -z-10"
          }`}
        >
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={`${
                  pathname.startsWith(link.href) && "text-clr-accent"
                } hover:text-clr-accent`}
                onClick={() => setShow(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-1/3">
            <Link 
              href="generate" 
              className="w-full"
              onClick={() => setShow(false)}
            >
              <Generic content="Generate" className="w-full" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
