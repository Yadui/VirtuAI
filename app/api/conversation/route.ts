// app/api/convo/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  // Make the API request to Pollination (replace with the actual endpoint)
  const response = await fetch(
    `https://text.pollinations.ai/prompt/${encodeURIComponent(prompt)}`
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data from Pollination API" },
      { status: 500 }
    );
  }

  // Since the response is plain text, we read it as text.
  const data = await response.text();

  // Return the plain text response to the frontend
  return NextResponse.json({ reply: data });
}
