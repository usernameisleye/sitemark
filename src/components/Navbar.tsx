"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AlignRight, X, Brain } from "lucide-react"

const Navbar = () => {
  const [show, setShow] = useState(false)
  
  return (
    <div className="m-8">
        <nav className="relative flex justify-between p-4 bg-bg-nav dark:bg-bg-nav-dark border border-border-clr dark:border-border-clr-dark rounded-full">
            <Image 
                src="/images/Logo.svg"
                alt="Logo"
                width={120}
                height={120}
                priority
            />

            <button 
                onClick={() => setShow(!show)}
                className="block p-3 rounded-full bg-clr-accent md:hidden"
            >
                {show ? <X /> : <AlignRight />}
            </button>

            <ul className={`flex justify-between items-center gap-6 absolute left-1/2 -translate-x-1/2 w-full bg-bg-nav dark:bg-bg-nav-dark p-3 border border-border-clr-dark rounded-full duration-200 md:justify-end md:static md:translate-x-0 md:p-0 md:border-none md:w-1/2 md:opacity-100 md:z-0 ${show ? "-bottom-full opacity-100" : "bottom-0 opacity-0 -z-10"}`}>
                <li>
                    <Link href="" className="hover:text-clr-accent">
                        Samples & Examples
                    </Link>
                </li>
                <li>
                    <Link href="" className="hover:text-clr-accent">
                        Feedback
                    </Link>
                </li>
                <li className="w-1/4">
                    <Link href="" className="w-full">
                        <button className="group relative bg-clr-accent w-full h-max p-6 rounded-full overflow-hidden">
                            {/* Under construction */}
                            <span className="absolute inset-0 top-1/4 group-hover:-translate-x-96 duration-200">Generate</span>

                            <Brain className="inline-block absolute inset-0 m-auto translate-x-96 group-hover:translate-x-0 duration-500" />
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar