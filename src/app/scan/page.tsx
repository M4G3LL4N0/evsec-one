"use client";

import { useState } from "react";

export default function ScanPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
        <h1 className="text-3xl font-semibold text-center">
          Check your Privacy Score
        </h1>

        <input required placeholder="Full Name" className="w-full p-3 bg-black border border-white/10 rounded-xl" />
        <input required type="email" placeholder="Email" className="w-full p-3 bg-black border border-white/10 rounded-xl" />
        <input placeholder="Phone" className="w-full p-3 bg-black border border-white/10 rounded-xl" />

        <button className="w-full bg-white text-black py-3 rounded-xl">
          {loading ? "Scanning..." : "Start Scan"}
        </button>
      </form>
    </main>
  );
}
