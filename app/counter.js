'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ padding: '10px 20px', fontSize: 16, border: 0, borderRadius: 8, background: '#38bdf8', color: '#0f172a', cursor: 'pointer' }}
    >
      Clicked {count} times
    </button>
  );
}
