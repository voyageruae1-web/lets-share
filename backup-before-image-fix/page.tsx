import Link from "next/link";

const categories = [
  {
    name: "Music",
    icon: "♫",
    color: "#ffe4e1",
    href: "#",
  },
  {
    name: "Sports",
    icon: "◉",
    color: "#e4f7e8",
    href: "#",
  },
  {
    name: "Theatre",
    icon: "✦",
    color: "#eee5ff",
    href: "#",
  },
  {
    name: "Comedy",
    icon: "☺",
    color: "#fff0d8",
    href: "#",
  },
  {
    name: "Festivals",
    icon: "✹",
    color: "#ffe5df",
    href: "#",
  },
  {
    name: "Food",
    icon: "♨",
    color: "#e4f4ef",
    href: "#",
  },
  {
    name: "Travel",
    icon: "✈",
    color: "#e5efff",
    href: "#",
  },
  {
    name: "Workshops",
    icon: "◇",
    color: "#eee9ff",
    href: "#",
  },
  {
    name: "Nightlife",
    icon: "☾",
    color: "#ffe5ef",
    href: "#",
  },
  {
    name: "Finance",
    icon: "◎",
    color: "#eee9d8",
    href: "/finance",
  },
  {
    name: "World Packing",
    icon: "◉",
    color: "#e6f0f5",
    href: "#",
  },
  {
    name: "Activities",
    icon: "△",
    color: "#f0e9ff",
    href: "/activities",
  },
];

const explore = [
  {
    title: "Live Music in Mumbai",
    subtitle: "Concerts · Music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Weekend Escapes",
    subtitle: "Travel · Getaways",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Best Comedy Shows",
    subtitle: "Comedy · Stand-up",
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Food Experiences",
    subtitle: "Food · Experiences",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Art & Culture",
    subtitle: "Art · Culture",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Sports & Adventures",
    subtitle: "Sports · Outdoors",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
  },
];

const events = [
  {
    date: "18",
    month: "OCT",
    title: "Arijit Singh Live in Mumbai",
    location: "Jio World Garden",
    category: "Music",
  },
  {
    date: "20",
    month: "OCT",
    title: "Mumbai Indians vs CSK",
    location: "Wankhede Stadium",
    category: "Sports",
  },
  {
    date: "25",
    month: "OCT",
    title: "The Great Indian Musical",
    location: "NCPA, Mumbai",
    category: "Theatre",
  },
  {
    date: "02",
    month: "NOV",
    title: "Holi Fest 2025",
    location: "Mahalaxmi Racecourse",
    category: "Festival",
  },
  {
    date: "08",
    month: "NOV",
    title: "Bandra Food Trail",
    location: "Bandra West",
    category: "Food",
  },
  {
    date: "15",
    month: "NOV",
    title: "Elephanta Caves Day Trip",
    location: "Gateway of India",
    category: "Travel",
  },
];

const stories = [
  {
    title: "A perfect weekend in South Mumbai",
    author: "Riya Sharma",
    category: "Travel",
  },
  {
    title: "5 hidden cafés you need to try",
    author: "Aman Mehta",
    category: "Food",
  },
  {
    title: "What I learned from my first marathon",
    author: "Karan Shah",
    category: "Sports",
  },
  {
    title: "The best independent music venues",
    author: "Neha Kapoor",
    category: "Music",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="logo">
            Let&apos;s Share
            <span className="logo-mark">✦</span>
          </Link>

          <div className="nav-links">
            <Link href="/" className="active">
              Discover
            </Link>

            <Link href="#events">Events</Link>

            <Link href="#explore">Places</Link>

            <Link href="#explore">Experiences</Link>

            <Link href="#community">Community</Link>

            <Link href="#more">More⌄</Link>
          </div>

          <div className="nav-actions">
            <button className="location-button" type="button">
              <span>⌖</span>
              Mumbai
              <span>⌄</span>
            </button>

            <button
              className="profile-button-nav"
              type="button"
              aria-label="Profile"
            >
              ○
            </button>

            <button
              className="menu-button"
              type="button"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-eyebrow">
            LIVE. EXPLORE. SHARE.
          </p>

          <h1>
            Discover places.
            <br />
            Share experiences.
          </h1>

          <p className="hero-subtitle">
            Find events, places to explore, and experiences
            worth sharing.
          </p>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search events, places, experiences, artists, or cities..."
              aria-label="Search"
            />

            <div className="search-location">
              ⌖ Mumbai⌄
            </div>

            <button
              className="search-button"
              type="button"
              aria-label="Search"
            >
              ⌕
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}
      <section className="categories-section">
        <div className="category-row">
          {categories.map((category) => (
            <Link
              href={category.href}
              className="category"
              key={category.name}
            >
              <span
                className="category-icon"
                style={{
                  backgroundColor: category.color,
                }}
              >
                {category.icon}
              </span>

              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          EXPLORE
      ===================================================== */}
      <section
        className="section explore-section"
        id="explore"
      >
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              DISCOVER SOMETHING NEW
            </p>

            <h2>Explore what&apos;s happening</h2>
          </div>

          <Link href="#explore" className="view-all">
            View all →
          </Link>
        </div>

        <div className="explore-grid">
          {explore.map((item) => (
            <article
              className="explore-card"
              key={item.title}
            >
              <div className="explore-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="explore-image"
                />
              </div>

              <div className="explore-card-content">
                <p>{item.subtitle}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          TRENDING EVENTS
      ===================================================== */}
      <section
        className="section events-section"
        id="events"
      >
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              DON&apos;T MISS OUT
            </p>

            <h2>Trending events</h2>
          </div>

          <Link href="#events" className="view-all">
            See all events →
          </Link>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article
              className="event-card"
              key={event.title}
            >
              <div className="event-date">
                <strong>{event.date}</strong>
                <span>{event.month}</span>
              </div>

              <div className="event-info">
                <p>{event.category}</p>

                <h3>{event.title}</h3>

                <span>{event.location}</span>
              </div>

              <span className="event-arrow">
                →
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          COMMUNITY
      ===================================================== */}
      <section
        className="section community-section"
        id="community"
      >
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              FROM THE COMMUNITY
            </p>

            <h2>Stories worth sharing</h2>
          </div>

          <Link href="#community" className="view-all">
            Explore community →
          </Link>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <article
              className="story-card"
              key={story.title}
            >
              <div className="story-number">
                0
                {stories.indexOf(story) + 1}
              </div>

              <div className="story-content">
                <p>{story.category}</p>

                <h3>{story.title}</h3>

                <span>
                  Shared by {story.author}
                </span>
              </div>

              <span className="story-arrow">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="footer" id="more">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link
              href="/"
              className="logo footer-logo"
            >
              Let&apos;s Share
              <span className="logo-mark">✦</span>
            </Link>

            <p className="footer-description">
              Discover places. Share experiences.
            </p>
          </div>

          <div className="footer-links">
            <Link href="/">Discover</Link>
            <Link href="#events">Events</Link>
            <Link href="#explore">Places</Link>
            <Link href="#community">
              Community
            </Link>
          </div>

          <div className="footer-copy">
            © 2026 Let&apos;s Share
          </div>
        </div>
      </footer>
    </main>
  );
}