import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <section>
        <h2>AI Quick Start</h2>
        <p>Perfect for small businesses and startups looking to explore AI. Includes a discovery call and basic AI strategy report.</p>
      </section>
      <section>
        <h2>AI Essentials</h2>
        <p>For businesses ready to start implementing AI. Includes a comprehensive strategy session and customized AI roadmap.</p>
      </section>
      <section>
        <h2>AI On-Demand</h2>
        <p>Ongoing consulting and support for businesses implementing AI solutions. Includes monthly check-ins and priority support.</p>
      </section>
      <Link href="/contact">
        <a>Contact Us to Learn More</a>
      </Link>
    </div>
  );
}
