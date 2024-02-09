'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { Suspense } from "react";

export default function Header() {


const { data: session } = useSession()
  return (
    <header className="flex justify-center items-center z-10 relative p-5">
      <nav className="absolute left-10 flex justify-center items-center gap-x-5">
        <a href="/" className="text-white/60 hover:text-white/80 transition">Home</a>
        <a href="/dashboard" className="text-white/60 hover:text-white/80 transition">Dashboard</a>
        <a href="/work" className="text-white/60 hover:text-white/80 transition">New work</a>
      </nav>
      <h1 className="text-white text-xl italic">Jolworking</h1>
      {/* <Suspense fallback={""}> */}
      {session?.user ? (
        <div className="absolute right-3 sm:right-10 flex justify-center items-center gap-x-5">
          <img src={session?.user.image!} alt="user" className="w-10 h-10 rounded-full" />
          <h3 className="text-white text-sm lg:block hidden">{session?.user.name}</h3>
          <button onClick={logOut} className="sm:right-20 px-3 py-1.5 text-black bg-green-600 rounded-md text-sm transition hover:bg-green-400">
            Log out
          </button>
        </div>
      ) : (
        <button onClick={singIn} className="absolute right-3 sm:right-10 px-3 py-1.5 text-black bg-green-600 rounded-md text-sm transition hover:bg-green-400">
        Sign up
        </button>
      )}
      {/* </Suspense> */}
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

async function logOut() {
  await signOut({callbackUrl: "http://localhost:3000"}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
  })
}
