import nodemailer, { TransportOptions } from "nodemailer"

export async function POST(req: Request) {
    const { name, email, feedback } = await req.json()
    
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        } as TransportOptions)

        const msg = `
            Name: ${name}\r\n
            Email: ${email}\r\n
            Feedback: ${feedback}
        `

        const data = {
            from: email,
            to: process.env.TO_EMAIL,
            subject: "Feedback on Sitemark",
            html: msg.replace(/\r\n/g, "<br>")
        }

        transporter.sendMail(data, 
            (error) => {
                if(error) console.log(error)
            })
        return new Response(JSON.stringify({ msg: "Feedback sent successfully" }), { status: 200 })
    }
    catch(error) {
        console.error(error)
        return new Response(JSON.stringify({ msg: "Failed to send feedback" }), { status: 500 })
    }
}