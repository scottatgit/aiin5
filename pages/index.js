import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>AI Strategy Consulting for Your Business</h1>
        <p>Unlock the power of AI with personalized strategies tailored to your business needs.</p>
        <Link href="/services">
          Explore Our Services
        </Link>
      </header>
    </div>
  );
}
