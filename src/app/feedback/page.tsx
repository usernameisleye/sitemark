"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Heading, Paragraph } from "@/components"

export default function Feedback() {
    const [disabled, setDisabled] = useState<boolean>(false)

    const handleSubmit = async (event: any) => {
        setDisabled(true)
        event.preventDefault()

        const data = new FormData(event.target)
        const formData = Object.fromEntries(data)
        try{
            const options = {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(formData)
            }

            const r = await fetch("api/feedback", options)
            const j = await r.json()
        }
        catch(er: any) {
            console.log(er.message)
        }
        finally {
            setDisabled(false)
            event.target.reset()
        }
    }

    return (
        <main id="main-content" className="px-8 md:w-4/5 mx-auto">
            <header className="text-center my-16">
                <Heading className="text-3xl">
                    Share Your {" "} 
                    <span className="text-clr-accent">Feedback</span>
                </Heading>
                <Paragraph className="md:w-3/5 mx-auto my-4">
                    Feel free to share your thoughts and suggestions.Your feedback helps us identify areas for improvement and shape future updates. Thanks for you time👍🏾
                </Paragraph>
            </header>

            <section className="my-16">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <input 
                            required
                            name="name"
                            type="text" 
                            placeholder="What's your name"
                            className="basis-full bg-bg-dim dark:bg-bg-dim-dark outline-none p-4 rounded-md border border-transparent focus-within:border-clr-accent"
                        />
                        <input 
                            required
                            type="email"
                            name="email"
                            inputMode="email" 
                            placeholder="What's your email address"
                            className="basis-full bg-bg-dim dark:bg-bg-dim-dark outline-none p-4 rounded-md border border-transparent focus-within:border-clr-accent"
                        />
                    </div>
                    <textarea 
                        rows={9}
                        required 
                        id="feedback"
                        name="feedback"
                        minLength={10}
                        placeholder="Share your feedback🔥"
                        className="w-full bg-bg-dim dark:bg-bg-dim-dark outline-none p-4 rounded-md border border-transparent focus-within:border-clr-accent"
                    />
                    
                    <button 
                        type="submit"
                        disabled={disabled}
                        className="bg-clr-accent rounded-lg h-12 mt-2 flex justify-center items-center gap-2 duration-200 hover:scale-105 disabled:bg-bg-dim disabled:dark:bg-bg-dim-dark disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        <Send />
                        <span>Submit</span>
                    </button>
                </form>
            </section>
        </main>
    )
}