"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const activityNames: Record<string, string> = {
  "health-checkup": "Health Checkup",
  yoga: "Yoga",
  ayurveda: "Ayurveda",
  "chinese-medicine": "Chinese Medicine",
  "chinese-acupuncture": "Chinese Acupuncture",
  "olympics-training": "Olympics Training",
  marathons: "Marathons",
  "swimming-20km": "Swimming 20km",
  cathelntics: "Cathelntics",
  "muay-thai": "Muay Thai",
  mma: "MMA",

  "car-building-studio": "Car Building Studio",
  "music-production": "Music Production",
  "cinema-bing-watching": "Cinema - Bing Watching",
  "food-tour": "Food Tour",
  "board-games": "Board Games",
  "hosting-people": "Hosting People",
  travelling: "Travelling",
  shopping: "Shopping",
  "books-to-read": "Books to Read",
  "reading-session": "Reading Session",
  "booking-reading-club": "Booking Reading Club",
};

const activityCategories: Record<string, string> = {
  "health-checkup": "Health & Wellness",
  yoga: "Health & Wellness",
  ayurveda: "Health & Wellness",
  "chinese-medicine": "Health & Wellness",
  "chinese-acupuncture": "Health & Wellness",
  "olympics-training": "Sports & Training",
  marathons: "Sports & Training",
  "swimming-20km": "Sports & Training",
  cathelntics: "Sports & Training",
  "muay-thai": "Sports & Training",
  mma: "Sports & Training",
  "car-building-studio": "Creative",
  "music-production": "Creative",
  "cinema-bing-watching": "Entertainment",
  "food-tour": "Food",
  "board-games": "Games",
  "hosting-people": "Social",
  travelling: "Travel",
  shopping: "Lifestyle",
  "books-to-read": "Reading",
  "reading-session": "Reading",
  "booking-reading-club": "Reading",
};

const calendarDays = [
  ["28", "29", "30", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24", "25"],
  ["26", "27", "28", "29", "30", "31", "1"],
];

export default function ActivityCalendarPage() {
  const params = useParams();

  const slug =
    typeof params.activity === "string"
      ? params.activity
      : "";

  const activity =
    activityNames[slug] || "Activity";

  const category =
    activityCategories[slug] || "Activity";

  const [step, setStep] = useState(1);

  const [selectedPeople, setSelectedPeople] = useState([
    "Friends",
  ]);

  const [selectedDate, setSelectedDate] = useState("3");

  const [startTime, setStartTime] = useState("7:00 AM");

  const [endTime, setEndTime] = useState("8:30 AM");

  const [location, setLocation] =
    useState("Mumbai");

  const [description, setDescription] =
    useState("");

  const [shareLink, setShareLink] =
    useState("");

  const togglePerson = (person: string) => {
    setSelectedPeople((current) =>
      current.includes(person)
        ? current.filter((item) => item !== person)
        : [...current, person]
    );
  };

  const createShareLink = () => {
    const generatedLink =
      `${window.location.origin}/activities/${slug}?shared=true`;

    setShareLink(generatedLink);

    navigator.clipboard?.writeText(generatedLink);
  };

  return (
    <main className="calendar-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">
        <div className="navbar-inner">

          <Link href="/" className="logo">
            Let&apos;s Share
            <span className="logo-mark">✦</span>
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

            <button
              className="location-button"
              type="button"
            >
              ⌖ Mumbai⌄
            </button>

            <button
              className="profile-button-nav"
              type="button"
            >
              ○
            </button>

            <button
              className="menu-button"
              type="button"
            >
              ☰
            </button>

          </div>

        </div>
      </nav>

      {/* =====================================================
          ACTIVITY HEADER
      ===================================================== */}

      <section className="calendar-hero">

        <div className="calendar-hero-overlay" />

        <div className="calendar-hero-content">

          <Link
            href="/activities"
            className="calendar-back"
          >
            ← Back to Activities
          </Link>

          <p className="calendar-eyebrow">
            LET&apos;S SHARE CALENDAR
          </p>

          <h1>{activity}</h1>

          <p>
            Plan this activity, invite people,
            and share it with the people joining you.
          </p>

        </div>

      </section>

      {/* =====================================================
          MAIN CALENDAR APPLICATION
      ===================================================== */}

      <section className="calendar-workspace">

        {/* SIDEBAR */}

        <aside className="calendar-sidebar">

          <div className="selected-activity">

            <div className="selected-activity-icon">
              ◌
            </div>

            <div>
              <strong>{activity}</strong>
              <span>{category}</span>
            </div>

          </div>

          <div className="calendar-steps">

            <button
              className={step === 1 ? "active" : ""}
              onClick={() => setStep(1)}
            >
              <span>1</span>
              Invite People
            </button>

            <button
              className={step === 2 ? "active" : ""}
              onClick={() => setStep(2)}
            >
              <span>2</span>
              Date &amp; Time
            </button>

            <button
              className={step === 3 ? "active" : ""}
              onClick={() => setStep(3)}
            >
              <span>3</span>
              Details
            </button>

            <button
              className={step === 4 ? "active" : ""}
              onClick={() => setStep(4)}
            >
              <span>4</span>
              Share
            </button>

          </div>

        </aside>

        {/* MAIN CONTENT */}

        <div className="calendar-main">

          {/* =================================================
              STEP 1 — INVITE PEOPLE
          ================================================= */}

          {step === 1 && (
            <div className="calendar-screen">

              <div className="screen-heading">

                <div>
                  <p className="screen-eyebrow">
                    STEP 1
                  </p>

                  <h2>Invite People</h2>

                  <p>
                    Add friends, family or other people
                    who will join this activity.
                  </p>
                </div>

              </div>

              <div className="invite-grid">

                <button
                  className={`invite-card ${
                    selectedPeople.includes("Friends")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    togglePerson("Friends")
                  }
                >
                  <div className="invite-icon">
                    👥
                  </div>

                  <h3>Friends</h3>

                  <p>
                    Invite your friends to join
                    this activity.
                  </p>

                  <span>
                    {selectedPeople.includes("Friends")
                      ? "✓ Selected"
                      : "Select →"}
                  </span>
                </button>

                <button
                  className={`invite-card ${
                    selectedPeople.includes("Family")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    togglePerson("Family")
                  }
                >
                  <div className="invite-icon">
                    ⌂
                  </div>

                  <h3>Family</h3>

                  <p>
                    Invite your family members
                    to this activity.
                  </p>

                  <span>
                    {selectedPeople.includes("Family")
                      ? "✓ Selected"
                      : "Select →"}
                  </span>
                </button>

                <button
                  className={`invite-card ${
                    selectedPeople.includes("Other")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    togglePerson("Other")
                  }
                >
                  <div className="invite-icon">
                    ◎
                  </div>

                  <h3>Other</h3>

                  <p>
                    Invite other people or
                    groups.
                  </p>

                  <span>
                    {selectedPeople.includes("Other")
                      ? "✓ Selected"
                      : "Select →"}
                  </span>
                </button>

              </div>

              <div className="selected-members">

                <strong>
                  Selected:
                </strong>

                {selectedPeople.length === 0
                  ? " No people selected"
                  : selectedPeople.join(", ")}

              </div>

              <div className="screen-actions">

                <button
                  className="primary-calendar-button"
                  onClick={() => setStep(2)}
                >
                  Continue →
                </button>

              </div>

            </div>
          )}

          {/* =================================================
              STEP 2 — DATE & TIME
          ================================================= */}

          {step === 2 && (
            <div className="calendar-screen">

              <div className="screen-heading">

                <div>
                  <p className="screen-eyebrow">
                    STEP 2
                  </p>

                  <h2>Date &amp; Time</h2>

                  <p>
                    Choose when you want to do{" "}
                    <strong>{activity}</strong>.
                  </p>
                </div>

                <button
                  className="create-event-button"
                  onClick={() => setStep(3)}
                >
                  + Create Event
                </button>

              </div>

              <div className="calendar-layout">

                {/* CALENDAR LIST */}

                <div className="calendar-list">

                  <h4>Calendar List</h4>

                  <div className="calendar-person">
                    <span>👥</span>
                    Friends
                    <b>✓</b>
                  </div>

                  <div className="calendar-person">
                    <span>⌂</span>
                    Family
                    <b>✓</b>
                  </div>

                  <div className="calendar-person">
                    <span>＋</span>
                    Add Calendar
                  </div>

                </div>

                {/* MONTH */}

                <div className="month-calendar">

                  <div className="month-toolbar">

                    <button type="button">
                      ‹
                    </button>

                    <strong>
                      October, 2026
                    </strong>

                    <button type="button">
                      ›
                    </button>

                    <div className="view-toggle">
                      <button className="active">
                        Monthly
                      </button>

                      <button>
                        Weekly
                      </button>
                    </div>

                  </div>

                  <div className="weekdays">

                    {[
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun",
                    ].map((day) => (
                      <span key={day}>
                        {day}
                      </span>
                    ))}

                  </div>

                  <div className="month-grid">

                    {calendarDays.flat().map(
                      (day, index) => (
                        <button
                          key={`${day}-${index}`}
                          className={
                            selectedDate === day &&
                            index === 5
                              ? "selected-day"
                              : ""
                          }
                          onClick={() =>
                            setSelectedDate(day)
                          }
                        >
                          <span>{day}</span>

                          {index === 5 && (
                            <small>
                              {activity}
                              <br />
                              7:00 AM
                            </small>
                          )}
                        </button>
                      )
                    )}

                  </div>

                </div>

                {/* EVENT SUMMARY */}

                <div className="event-summary">

                  <div className="event-summary-title">
                    <span>◌</span>
                    <strong>{activity}</strong>
                  </div>

                  <label>
                    Date
                    <input
                      type="text"
                      value={`Oct ${selectedDate}, 2026`}
                      readOnly
                    />
                  </label>

                  <label>
                    Starts
                    <select
                      value={startTime}
                      onChange={(event) =>
                        setStartTime(
                          event.target.value
                        )
                      }
                    >
                      <option>7:00 AM</option>
                      <option>8:00 AM</option>
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                    </select>
                  </label>

                  <label>
                    Ends
                    <select
                      value={endTime}
                      onChange={(event) =>
                        setEndTime(
                          event.target.value
                        )
                      }
                    >
                      <option>8:30 AM</option>
                      <option>9:30 AM</option>
                      <option>10:30 AM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:30 PM</option>
                    </select>
                  </label>

                  <label>
                    Location
                    <input
                      value={location}
                      onChange={(event) =>
                        setLocation(
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <button
                    className="primary-calendar-button"
                    onClick={() => setStep(3)}
                  >
                    Continue →
                  </button>

                </div>

              </div>

            </div>
          )}

          {/* =================================================
              STEP 3 — DETAILS
          ================================================= */}

          {step === 3 && (
            <div className="calendar-screen">

              <div className="screen-heading">

                <div>
                  <p className="screen-eyebrow">
                    STEP 3
                  </p>

                  <h2>Event Details</h2>

                  <p>
                    Add more information about
                    your activity.
                  </p>
                </div>

              </div>

              <div className="details-layout">

                <div className="details-form">

                  <div className="detail-title">
                    <span>◌</span>

                    <div>
                      <strong>
                        {activity}
                      </strong>

                      <small>
                        {category}
                      </small>
                    </div>
                  </div>

                  <label>
                    Title

                    <input
                      defaultValue={`${activity} Session`}
                    />
                  </label>

                  <label>
                    Description

                    <textarea
                      placeholder={`Add details about your ${activity.toLowerCase()}...`}
                      value={description}
                      onChange={(event) =>
                        setDescription(
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    Location

                    <input
                      value={location}
                      onChange={(event) =>
                        setLocation(
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    Category

                    <select defaultValue={category}>
                      <option>
                        {category}
                      </option>

                      <option>
                        Health &amp; Wellness
                      </option>

                      <option>
                        Sports &amp; Training
                      </option>

                      <option>
                        Entertainment
                      </option>

                      <option>
                        Travel
                      </option>

                      <option>
                        Lifestyle
                      </option>
                    </select>
                  </label>

                  <label>
                    Notes

                    <textarea
                      placeholder="Add anything participants should know..."
                    />
                  </label>

                </div>

                <div className="details-side">

                  <div className="photo-upload">

                    <strong>
                      Add Photos
                    </strong>

                    <div>
                      <span>▧</span>

                      <p>
                        Upload photos
                        <br />
                        or drag and drop
                      </p>
                    </div>

                  </div>

                  <label>
                    Privacy

                    <select>
                      <option>
                        Public
                      </option>

                      <option>
                        Friends
                      </option>

                      <option>
                        Family
                      </option>

                      <option>
                        Private
                      </option>
                    </select>
                  </label>

                  <button
                    className="primary-calendar-button"
                    onClick={() => setStep(4)}
                  >
                    Next →
                  </button>

                </div>

              </div>

            </div>
          )}

          {/* =================================================
              STEP 4 — SHARE
          ================================================= */}

          {step === 4 && (
            <div className="calendar-screen share-screen">

              <div className="share-success-icon">
                ✓
              </div>

              <p className="screen-eyebrow">
                LET&apos;S SHARE CALENDAR
              </p>

              <h2>
                {activity} is ready to share
              </h2>

              <p className="share-description">
                Your activity calendar is ready.
                Share the link with friends, family,
                or anyone joining you.
              </p>

              <div className="share-summary">

                <div>
                  <span>Activity</span>
                  <strong>{activity}</strong>
                </div>

                <div>
                  <span>Date</span>
                  <strong>
                    October {selectedDate}, 2026
                  </strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>
                    {startTime} – {endTime}
                  </strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>{location}</strong>
                </div>

                <div>
                  <span>People</span>
                  <strong>
                    {selectedPeople.length > 0
                      ? selectedPeople.join(", ")
                      : "No people selected"}
                  </strong>
                </div>

              </div>

              <button
                className="primary-calendar-button share-button-large"
                onClick={createShareLink}
              >
                🔗 Create &amp; Copy Share Link
              </button>

              {shareLink && (
                <div className="share-link-box">

                  <span>
                    Share link created
                  </span>

                  <input
                    value={shareLink}
                    readOnly
                  />

                  <button
                    onClick={() =>
                      navigator.clipboard?.writeText(
                        shareLink
                      )
                    }
                  >
                    Copy
                  </button>

                </div>
              )}

              <button
                className="secondary-calendar-button"
                onClick={() => setStep(1)}
              >
                ← Edit Activity
              </button>

            </div>
          )}

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-inner">

          <div>

            <Link
              href="/"
              className="logo footer-logo"
            >
              Let&apos;s Share
              <span className="logo-mark">
                ✦
              </span>
            </Link>

            <p className="footer-description">
              Discover places. Share experiences.
            </p>

          </div>

          <div className="footer-copy">
            © 2026 Let&apos;s Share
          </div>

        </div>

      </footer>

    </main>
  );
}