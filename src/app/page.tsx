"use client";

export default function Home() {
  const handleClick = async () => {
    console.log("hi");
    // const raw = await fetch("http://localhost:3000/api/addAlice", {
    const raw = await fetch("http://localhost:3000/api/getUsers", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
    });
    console.log(raw);
    const data = await raw.json();
    console.log(data);
  };
  return (
    <div>
      <div>testing api routes</div>
      <button onClick={handleClick}>fetch</button>
    </div>
  );
}
