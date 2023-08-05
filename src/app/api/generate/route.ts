export async function POST(req: Request) {
  const { prompt, length } = await req.json()

  try {
    let url = `https://api.openai.com/v1/chat/completions`
    let options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Write an ${length} words essay on the following topic: ${prompt} \n\n`,
          },
        ],
        max_tokens: 100,
      }),
    }

    const r = await fetch(url, options)
    const j = await r.json()
    const { content } = j.choices[0].message

    return new Response(JSON.stringify({ data: content }), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Server Errror" }), { status: 500 })
  }
}
