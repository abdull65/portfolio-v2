"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/"); // Navigate back to the portfolio main page
  };

  return (
    <button onClick={handleBack} className="text-blue-600 underline">
      ← Back to Portfolio
    </button>
  );
}
