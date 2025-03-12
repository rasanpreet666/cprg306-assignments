import Link from "next/link"; 
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Week 2 Assignments  </Link>
        <Link href="/week-3">Week 3 Assignments</Link>
        <Link href="/week-7">Week 7 Assignments</Link>
      </p>
    </main>
  );
}