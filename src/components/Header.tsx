'use client'
import { signIn } from "next-auth/react";

export default function Header() {

  return (
    <header className="flex justify-center items-center z-10 relative p-5">
      <h1 className="text-white text-xl italic">Jolworking</h1>
      <button onClick={singIn} className="absolute right-3 sm:right-10 px-3 py-1.5 text-black bg-green-600 rounded-md text-sm transition hover:bg-green-400">
        Sign up
      </button>
      <hr className="bg-white" />
    </header>
  );
}

async function singIn() { 
  await signIn("google", { callbackUrl: "http://localhost:3000" }).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
  })
}
