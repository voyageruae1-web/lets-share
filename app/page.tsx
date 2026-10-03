import Link from "next/link";

const categories = [
  { name: "Music", icon: "♫", color: "#ffe4e1", href: "#" },
  { name: "Sports", icon: "◉", color: "#e4f7e8", href: "#" },
  { name: "Theatre", icon: "✦", color: "#eee5ff", href: "#" },
  { name: "Comedy", icon: "☺", color: "#fff0d8", href: "#" },
  { name: "Festivals", icon: "✹", color: "#ffe5df", href: "#" },
  { name: "Food", icon: "♨", color: "#e4f4ef", href: "#" },
  { name: "Travel", icon: "✈", color: "#e5efff", href: "#" },
  { name: "Workshops", icon: "◇", color: "#eee9ff", href: "#" },
  { name: "Nightlife", icon: "☾", color: "#ffe5ef", href: "#" },
  { name: "Finance", icon: "◎", color: "#eee9d8", href: "/finance" },
  { name: "World Packing", icon: "◉", color: "#e6f0f5", href: "#" },
  { name: "Activities", icon: "△", color: "#f0e9ff", href: "#" },
];

const explore = [
  {
    title: "Live Music in Mumbai",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Weekend Escapes",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Best Comedy Shows",
    image:
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Food Experiences",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Art & Culture",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sports & Adventures",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=900&q=80",
  },
];

const events = [
  {
    category: "Music",
    title: "Arijit Singh Live in Mumbai",
    location: "Jio World Garden, Mumbai",
    date: "Sat, 24 May 2025",
    time: "7:00 PM",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Sports",
    title: "Mumbai Indians vs CSK",
    location: "Wankhede Stadium, Mumbai",
    date: "Mon, 12 May 2025",
    time: "7:30 PM",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Theatre",
    title: "The Great Indian Musical",
    location: "Nehru Centre, Mumbai",
    date: "Sun, 25 May 2025",
    time: "6:30 PM",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Festival",
    title: "Holi Fest 2025",
    location: "Jio World Garden, Mumbai",
    date: "Fri, 14 Mar 2025",
    time: "10:00 AM",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Food",
    title: "Bandra Food Trail",
    location: "Bandra, Mumbai",
    date: "Sat, 17 May 2025",
    time: "4:00 PM",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Travel",
    title: "Elephanta Caves Day Trip",
    location: "Gateway of India, Mumbai",
    date: "Sun, 18 May 2025",
    time: "8:00 AM",
    price: "₹1,899",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
  },
];

const stories = [
  {
    title: "5 Hidden Beaches Near Mumbai You Need to Visit",
    author: "Rhea Sharma",
    time: "2 min read",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Best Street Food Trail in Mumbai",
    author: "Karan Mehta",
    time: "3 min read",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Trekking to Rajmachi Fort — A Perfect Weekend Getaway",
    author: "Neha Kapoor",
    time: "4 min read",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "My First Concert Experience in Mumbai",
    author: "Arjun Nair",
    time: "3 min read",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="logo">
          Let&apos;s <span>Share</span>
          <i>✦</i>
        </div>

        <nav>
          <a className="active">Discover</a>
          <a>Events</a>
          <a>Places</a>
          <a>Experiences</a>
          <a>Community</a>
          <a>More⌄</a>
        </nav>

        <div className="nav-actions">
          <button className="location">⌖ Mumbai⌄</button>
          <button className="profile">◯</button>
          <button className="menu">☰</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">LIVE. EXPLORE. SHARE.</p>

          <h1>
            Discover places.
            <br />
            Share experiences.
          </h1>

          <p className="hero-subtitle">
            Find events, places to explore, and experiences worth sharing.
          </p>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search events, places, experiences, artists, or cities..."
            />

            <div className="search-location">⌖ Mumbai⌄</div>

            <button className="search-button">⌕</button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="category-section">
        <div className="category-row">
          {categories.map((category) => (
            <Link
              href={category.href}
              className="category"
              key={category.name}
            >
              <span
                className="category-icon"
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
              </span>

              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPLORE */}
      <section className="section">
        <div className="section-heading">
          <h2>Explore what&apos;s happening</h2>
          <a>View all →</a>
        </div>

        <div className="explore-grid">
          {explore.map((item) => (
            <article className="explore-card" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="explore-title">
                {item.title} <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRENDING EVENTS */}
      <section className="section">
        <div className="section-heading">
          <h2>Trending in Mumbai</h2>
          <a>View all →</a>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />

                <span className="event-category">
                  {event.category}
                </span>

                <button className="heart">♡</button>
              </div>

              <div className="event-info">
                <h3>{event.title}</h3>

                <p className="event-location">
                  ⌖ {event.location}
                </p>

                <p className="event-date">
                  ▣ {event.date} &nbsp; · &nbsp; {event.time}
                </p>

                <p className="event-price">
                  From <strong>{event.price}</strong>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section community-section">
        <div className="section-heading">
          <h2>Stories from the community</h2>
          <a>View all →</a>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <img src={story.image} alt={story.title} />

              <div className="story-overlay">
                <h3>{story.title}</h3>

                <p>
                  By {story.author} &nbsp; · &nbsp; {story.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          Let&apos;s <span>Share</span>
        </div>

        <p>Discover places. Share experiences.</p>

        <div className="footer-links">
          <a>About</a>
          <a>Events</a>
          <a>Places</a>
          <a>Community</a>
          <a>Contact</a>
        </div>

        <div className="copyright">
          © 2026 Let&apos;s Share. Built as an MVP.
        </div>
      </footer>
    </main>
  );
}