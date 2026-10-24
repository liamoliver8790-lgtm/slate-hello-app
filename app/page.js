import Counter from './counter';

export const dynamic = 'force-dynamic';

export default function Home() {
  const renderedAt = new Date().toISOString();
  return (
    <main style={{ textAlign: 'center', padding: 16 }}>
      <h1>Hello from Catalyst Slate</h1>
      <p>Server-rendered at {renderedAt}</p>
      <Counter />
      <p><a href="/api/hello" style={{ color: '#38bdf8' }}>/api/hello</a></p>
    </main>
  );
}
