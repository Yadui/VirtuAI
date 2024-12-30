import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
require("dotenv").config();
type DateString = "playhtapi" | "apiKey";
import fs from "fs";

// import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";
import * as PlayHT from "playht";
const key = process.env.PLAY_HT_API_TOKEN;

async function generateAudio() {
  // Initialize client
  PlayHT.init({
    userId: "abhinavyadav8@gmail.com",
    apiKey: "NGZNfVKjzwN41gDPpJc1Cyh76xg2",
  });

  const generated = await PlayHT.generate("Computers can speak now!");

  // Grab the generated file URL
  const { audioUrl } = generated;

  console.log("The url for the audio file is", audioUrl);
}

generateAudio();

// async function streamAudio(text: string) {
//   try {
//     const stream = await PlayHT.stream(
//       "All human wisdom is summed up in these two words: Wait and hope.",
//       { voiceEngine: "PlayDialog" }
//     );
//     stream.on("data", (chunk) => {
//       // Do whatever you want with the stream, you could save it to a file, stream it in realtime to the browser or app, or to a telephony system
//       fs.appendFileSync("output.mp3", chunk);
//     });
//     return stream;
//   } catch (error) {
//     console.log("[MUSIC_ERROR]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }
// const wrapper = () => {
//   export const POST = async (req: Request) => {
//     try {
//       const { userId } = auth();
//       const body = await req.json();
//       const { prompt } = body;

//       if (!userId) {
//         return new NextResponse("Unauthorized", { status: 401 });
//       }

//       if (!prompt) {
//         return new NextResponse("Prompt are required", { status: 400 });
//       }

//       // const freeTrial = await checkApiLimit();
//       // const isPro = await checkSubscription();

//       // if (!freeTrial && !isPro) {
//       //   return new NextResponse("Free Trial has expired", { status: 403 });
//       // }

//       // const response = await replicate.run(
//       //   "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
//       //   {
//       //     input: {
//       //       prompt_a: prompt,
//       //     },
//       //   }
//       // );

//       // if (!isPro) {
//       //   await incrementApiLimit();
//       // }

// return NextResponse.json(response);
//     } catch (error) {
//       console.log("[MUSIC_ERROR]", error);
//       return new NextResponse("Internal Error", { status: 500 });
//     }
//   };
// };
