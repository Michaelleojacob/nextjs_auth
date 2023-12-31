"use client";
import { SyntheticEvent, useState } from "react";

export default function CreateUser() {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const raw = await fetch("http://localhost:3000/api/users/createUser", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user.name.trim(),
        password: user.password.trim(),
      }),
    });
    const data = await raw.json();
    console.log(data);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            className="text-black"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          password
          <input
            className="text-black"
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
