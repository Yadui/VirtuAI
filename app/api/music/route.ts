export async function GET() {
  return new Response("Music feature is disabled", { status: 403 });
}
