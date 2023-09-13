import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/testApiRoutes"}>test apis</Link>
      </div>
    </div>
  );
}
