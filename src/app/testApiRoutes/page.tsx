"use client";
import Link from "next/link";

export default function TestApiRoutes() {
  const handleClick = async () => {
    // const raw = await fetch("http://localhost:3000/api/users/addAlice", {
    const raw = await fetch("http://localhost:3000/api/users/getUsers", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
    });
    const data = await raw.json();
    console.log(data);
  };
  return (
    <div>
      <Link href="/">home</Link>
      <div>testing api routes</div>
      <button onClick={handleClick}>fetch</button>
    </div>
  );
}
