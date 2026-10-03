import Link from "next/link";

const creators = [
  {
    name: "Mel",
    handle: "@travelingtoretirement",
    instagram: "https://www.instagram.com/travelingtoretirement/",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
    description:
      "Travel, retirement planning, lifestyle and practical financial inspiration for building a life with more freedom.",
  },
  {
    name: "Aakanksha Monga",
    handle: "@aakanksha.monga",
    instagram: "https://www.instagram.com/aakanksha.monga/?hl=en",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    description:
      "Travel creator sharing experiences, destinations, personal finance perspectives and ideas for exploring the world.",
  },
];

export default function FinancePage() {
  return (
    <main className="finance-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="logo">
            Let&apos;s Share
          </Link>

          <div className="nav-links">
            <Link href="/">Discover</Link>
            <Link href="/">Events</Link>
            <Link href="/">Places</Link>
            <Link href="/">Experiences</Link>
            <Link href="/">Community</Link>
            <Link href="/">More⌄</Link>
          </div>

          <div className="nav-actions">
            <button className="location-button" type="button">
              <span>●</span>
              Mumbai
              <span>⌄</span>
            </button>

            <button className="profile-button-nav" type="button">
              ♙
            </button>

            <button className="menu-button" type="button">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Finance Hero */}
      <section className="finance-hero">
        <div className="finance-hero-overlay" />

        <div className="finance-hero-content">
          <Link href="/" className="back-link">
            ← Back to Explore
          </Link>

          <p className="finance-eyebrow">LET&apos;S SHARE • CATEGORY</p>

          <h1>Finance</h1>

          <p className="finance-hero-description">
            Discover people, ideas and experiences around money, travel,
            lifestyle and building a more independent future.
          </p>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="finance-creators">
        <div className="finance-heading">
          <div>
            <p className="section-eyebrow">PEOPLE TO FOLLOW</p>
            <h2>Featured Finance Creators</h2>
            <p>
              Explore creators sharing perspectives on finance, travel,
              lifestyle and personal freedom.
            </p>
          </div>

          <Link href="/" className="back-category-button">
            ← Back to Categories
          </Link>
        </div>

        <div className="creator-grid">
          {creators.map((creator) => (
            <article className="creator-card" key={creator.name}>
              <div className="creator-image-wrapper">
                <img
                  src={creator.image}
                  alt={`${creator.name} profile`}
                  className="creator-image"
                />
              </div>

              <div className="creator-content">
                <p className="creator-label">FINANCE CREATOR</p>

                <h3>{creator.name}</h3>

                <a
                  href={creator.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  <span className="instagram-icon">◎</span>
                  {creator.handle}
                </a>

                <p className="creator-description">
                  {creator.description}
                </p>

                <a
                  href={creator.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-button"
                >
                  View Profile
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <Link href="/" className="logo footer-logo">
              Let&apos;s Share
            </Link>

            <p className="footer-description">
              Discover places. Share experiences.
            </p>
          </div>

          <div className="footer-links">
            <Link href="/">Discover</Link>
            <Link href="/">Events</Link>
            <Link href="/">Places</Link>
            <Link href="/">Community</Link>
          </div>

          <div className="footer-copy">
            © 2026 Let&apos;s Share
          </div>
        </div>
      </footer>
    </main>
  );
}