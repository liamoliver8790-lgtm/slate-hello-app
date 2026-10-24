export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({ message: 'Hello from a Next.js API route on Slate', time: new Date().toISOString() });
}
