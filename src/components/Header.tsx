"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Header() {
  const router = useRouter();
  
  function handleClick() {
    router.push("/login");
  }

  return (
    <header className="flex justify-center items-center z-10 relative p-5">
      <h1 className="text-white text-xl italic">Jolworking</h1>
      <button onClick={handleClick} className="absolute right-3 sm:right-10 px-3 py-1.5 text-black bg-green-600 rounded-md text-sm transition hover:bg-green-400">
        Sign up
      </button>
      <hr className="bg-white" />
    </header>
  );
}

