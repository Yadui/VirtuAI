import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.GEMINI_AI_KEY,
});

const gemini = new OpenAIApi(configuration);

// Handle GET requests
export async function GET(request: Request) {
  return NextResponse.json({ message: "GET request to conversation API" });
}

// Handle POST requests
export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "POST request received", data: body });
}
