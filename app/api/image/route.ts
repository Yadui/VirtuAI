import { NextResponse } from "next/server";
export const POST = async (req: Request) => {
  try {
    const { prompt, resolution = "512x512", amount = 1 } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    if (amount < 1 || amount > 4) {
      return NextResponse.json(
        { error: "Amount must be between 1 and 4" },
        { status: 400 }
      );
    }

    const responses: string[] = [];
    for (let i = 0; i < amount; i++) {
      // Generate a random seed for each image
      const randomSeed = Math.floor(Math.random() * 1000000);

      const apiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        prompt
      )}?seed=${randomSeed}&resolution=${resolution}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        return NextResponse.json(
          { error: "Failed to fetch image from Pollinations API" },
          { status: response.status }
        );
      }

      const imageBuffer = await response.arrayBuffer();
      const base64Image = `data:image/jpeg;base64,${Buffer.from(
        imageBuffer
      ).toString("base64")}`;
      responses.push(base64Image);
    }

    return NextResponse.json({ images: responses });
  } catch (error) {
    console.error("[IMAGE_ERROR]", error);
    return NextResponse.json(
      { error: "Something went wrong generating the image" },
      { status: 500 }
    );
  }
};
