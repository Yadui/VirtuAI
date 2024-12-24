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

// export const POST = async (req: Request ) =>  {

//     try {
//         const { userId } = auth();
//         const body = await req.json();
//         const { messages } = body;

//         if (!userId) {
//             return new NextResponse("Unauthorized", { status: 401 });
//         }

//         if (!configuration.apiKey) {
//             return new NextResponse("OpenAI API Key not configured.", { status: 500 });
//         }

//         if (!messages) {
//             return new NextResponse("Messages are required", { status: 400 });
//         }

//         const freeTrial = await checkApiLimit();
//         const isPro = await checkSubscription();

//         if(!freeTrial && !isPro){
//             return new NextResponse("Free Trial has expired", {status : 403})
//         }

//         const response = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages
//         });

//         if(!isPro){
//             await incrementApiLimit();
//         }

//         return NextResponse.json(response.data.choices[0].message);

//     }
//     catch (error) {

//         console.log('[CONVERSATION_ERROR]', error);
//         return new NextResponse("Internal Error", { status: 500 });

//     }
// };
