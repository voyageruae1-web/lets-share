import Link from "next/link";

const morningActivities = [
  {
    name: "Health Checkup",
    icon: "♡",
    slug: "health-checkup",
  },
  {
    name: "Yoga",
    icon: "◌",
    slug: "yoga",
  },
  {
    name: "Ayurveda",
    icon: "♧",
    slug: "ayurveda",
  },
  {
    name: "Chinese Medicine",
    icon: "◉",
    slug: "chinese-medicine",
  },
  {
    name: "Chinese Acupuncture",
    icon: "╱",
    slug: "chinese-acupuncture",
  },
  {
    name: "Olympics Training",
    icon: "♟",
    slug: "olympics-training",
  },
  {
    name: "Marathons",
    icon: "♟",
    slug: "marathons",
  },
  {
    name: "Swimming 20km",
    icon: "≋",
    slug: "swimming-20km",
  },
  {
    name: "Cathelntics",
    icon: "◌",
    slug: "cathelntics",
  },
  {
    name: "Muay Thai",
    icon: "▣",
    slug: "muay-thai",
  },
  {
    name: "MMA",
    icon: "◉",
    slug: "mma",
  },
];

const eveningActivities = [
  {
    name: "Car Building Studio",
    icon: "▱",
    slug: "car-building-studio",
  },
  {
    name: "Music Production",
    icon: "♫",
    slug: "music-production",
  },
  {
    name: "Cinema - Bing Watching",
    icon: "▣",
    slug: "cinema-bing-watching",
  },
  {
    name: "Food Tour",
    icon: "♨",
    slug: "food-tour",
  },
  {
    name: "Board Games",
    icon: "♧",
    slug: "board-games",
  },
  {
    name: "Hosting People",
    icon: "♧",
    slug: "hosting-people",
  },
  {
    name: "Travelling",
    icon: "✈",
    slug: "travelling",
  },
  {
    name: "Shopping",
    icon: "♧",
    slug: "shopping",
  },
  {
    name: "Books to Read",
    icon: "▤",
    slug: "books-to-read",
  },
  {
    name: "Reading Session",
    icon: "♡",
    slug: "reading-session",
  },
  {
    name: "Booking Reading Club",
    icon: "♧",
    slug: "booking-reading-club",
  },
];

function ActivityList({
  activities,
}: {
  activities: {
    name: string;
    icon: string;
    slug: string;
  }[];
}) {
  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <Link
          href={`/activities/${activity.slug}`}
          className="activity-item"
          key={activity.slug}
        >
          <span className="activity-item-icon">{activity.icon}</span>

          <span className="activity-item-name">{activity.name}</span>

          <span className="activity-item-arrow">→</span>
        </Link>
      ))}
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <main className="activities-page">
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

      {/* Hero */}
      <section className="activities-hero">
        <div className="activities-hero-overlay" />

        <div className="activities-hero-content">
          <Link href="/" className="back-link">
            ← Back to Explore
          </Link>

          <p className="activities-eyebrow">
            LET&apos;S SHARE • CATEGORY
          </p>

          <h1>Activities</h1>

          <p>
            Stay active, explore new hobbies, and discover
            experiences that make life more exciting.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="activities-content">
        <div className="activity-category-grid">
          {/* Morning */}
          <div className="activity-category-card">
            <div className="activity-category-header morning-header">
              <div>
                <span className="activity-category-symbol">☼</span>
                <h2>Morning Activities</h2>
                <p>
                  Start your day with energy, wellness and new
                  experiences.
                </p>
              </div>
            </div>

            <ActivityList activities={morningActivities} />
          </div>

          {/* Evening */}
          <div className="activity-category-card">
            <div className="activity-category-header evening-header">
              <div>
                <span className="activity-category-symbol">☾</span>
                <h2>Evening Activities</h2>
                <p>
                  Unwind, learn, create and connect.
                </p>
              </div>
            </div>

            <ActivityList activities={eveningActivities} />
          </div>
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
            <Link href="/">About</Link>
            <Link href="/">Events</Link>
            <Link href="/">Places</Link>
            <Link href="/">Community</Link>
            <Link href="/">Contact</Link>
          </div>

          <div className="footer-copy">
            © 2026 Let&apos;s Share
          </div>
        </div>
      </footer>
    </main>
  );
}