
"use client";

import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);

  function incementar() {
    setCounter(counter + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Contatdor</h1>
      
      <h2 className="text-3xl font-bold">{counter}</h2>

      <button onClick={incementar} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contar</button>
    </main>
  );
}
