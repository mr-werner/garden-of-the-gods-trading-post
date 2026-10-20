import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock, Gem, Menu, Palette, Phone, ShoppingBag, Store, Users, UtensilsCrossed, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// ---------------------------------------------------------------- Content (from gardenofthegodstradingpost.com, checked 2026-10-20)
const COMPANY = "Garden of the Gods Trading Post";
const ABBR = "ggtp";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "(719) 685-9045";
const PHONE_HREF = "tel:+17196859045";
const EMAIL = "info@gogtradingpost.com";
const ADDRESS = "324 Beckers Lane, Manitou Springs, CO 80829";
const ORIGINAL = "https://www.gardenofthegodstradingpost.com/";

const UP = "https://www.gardenofthegodstradingpost.com/wp-content/uploads";
const LOGO = `${UP}/2021/04/garden-of-the-gods-trading-post-logo.png`;
const MEDIA = {
  video: `${UP}/2025/12/GOTG-Trading-Post-30-Summer-1.mp4`,
  featured: `${UP}/2021/04/gogtp-featured-image.jpg`,
  balanced: `${UP}/2021/04/balancedrockbw.jpg`,
  porch: `${UP}/2021/02/GotG-TP-Porch.jpg`,
  bw: `${UP}/2021/02/TradingPostBW-scaled.jpg`,
  early: `${UP}/2021/02/1915.jpg`,
  expansion: `${UP}/2021/02/Expansion.jpg`,
};

const UNDER_ONE_ROOF = [
  { icon: Palette, title: "Art gallery", text: "Colorado's oldest and largest art gallery of its kind, right inside the Trading Post." },
  { icon: Gem, title: "Native American jewelry", text: "A deep selection of Native American jewelry, one of the reasons locals bring visiting family here." },
  { icon: ShoppingBag, title: "Colorado gifts", text: "More than 90,000 gifts, toys, t-shirts, trinkets and souvenirs, plus homemade fudge." },
  { icon: UtensilsCrossed, title: "Restaurant & patio", text: "Bison burgers and locally brewed beer on the back patio, looking out at the red rocks." },
];

const STATS = [
  ["1929", "the year our adobe opened"],
  ["25,000", "square feet under one roof"],
  ["90,000+", "gifts, toys and souvenirs"],
  ["400,000", "visitors a year to the park"],
];

const TIMELINE = [
  ["Early days", "A ten-year-old Charles E. Strausenback sells paintings and carved gypsum figures to visitors in the Garden of the Gods."],
  ["1917", "Charles opens his first store, after a summer photographing tourists at Balanced Rock."],
  ["1929", "The Trading Post opens on June 9, built for about $10,000 to look like a true adobe with cupolas."],
  ["1979", "After Charles and his widow Esther, T.A.T. Enterprises takes over and grows the store from 2,000 to 25,000 square feet, keeping the original building."],
];

const HOURS = [
  ["Summer", "8:00 a.m. – 8:30 p.m."],
  ["Winter", "9:00 a.m. – 5:00 p.m."],
  ["Spring & fall", "Call for hours"],
];

// ---------------------------------------------------------------- Components
function BalancedRock({ className = "" }) {
  return (
    <svg className={`rock ${className}`} viewBox="0 0 200 200" aria-hidden="true">
      <path d="M62 196 C66 168 82 150 96 140 C88 128 84 112 92 96 C70 92 50 74 54 50 C58 24 92 10 122 18 C152 26 166 52 158 76 C150 98 126 104 112 100 C116 118 112 132 106 140 C122 150 136 170 140 196Z" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["#inside", "Inside the Post"], ["#visit", "Plan a Visit"], ["#story", "Our Story"], ["#groups", "Groups & Events"]];
  return (
    <header className={`site-header${solid || open ? " is-solid" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}><img src={LOGO} alt={`${COMPANY} logo`} className="logo" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-shop" href={ORIGINAL} target="_blank" rel="noopener noreferrer">Shop Online <ArrowUpRight size={15} /></a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video className="hero-media" src={MEDIA.video} poster={MEDIA.porch} autoPlay muted loop playsInline aria-hidden="true" />
      <div className="hero-shade" />
      <div className="wrap hero-inner">
        <p className="eyebrow light">Inside Garden of the Gods · Since 1929</p>
        <h1>The local's way<br /><span>into the Garden.</span></h1>
        <p className="lede">Colorado's oldest and largest gift shop and art gallery, in a 1929 adobe at the park's quiet west entrance. Shop, eat on the patio, then walk out to the red rocks.</p>
        <div className="hero-actions">
          <a className="btn btn-rock" href="#visit">Plan your visit <ArrowRight size={18} /></a>
          <a className="btn btn-sand" href={ORIGINAL} target="_blank" rel="noopener noreferrer">Shop online</a>
        </div>
      </div>
      <div className="parapet" aria-hidden="true" />
    </section>
  );
}

function TodayBar() {
  return (
    <section className="today" aria-label="Today at the Trading Post">
      <div className="wrap today-row">
        <span><Clock size={18} /> Open daily · Summer 8 a.m.–8:30 p.m. · Winter 9 a.m.–5 p.m.</span>
        <a href={PHONE_HREF}><Phone size={16} /> {PHONE}</a>
        <a href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer">Directions <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}

function Inside() {
  return (
    <section className="inside" id="inside">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Inside the post</p>
          <h2>Four reasons to stop before the trailhead.</h2>
        </div>
        <div className="inside-grid">
          {UNDER_ONE_ROOF.map(({ icon: Icon, title, text }) => (
            <article className="inside-card" key={title}>
              <span className="icon-tile"><Icon size={26} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="stats">
          {STATS.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <div className="visit-photo">
          <img src={MEDIA.featured} alt="The Garden of the Gods Trading Post" loading="lazy" />
          <BalancedRock className="visit-rock" />
        </div>
        <div className="visit-copy">
          <p className="eyebrow">Visit the Garden like a local</p>
          <h2>Park here. Walk out to the rocks.</h2>
          <p>Garden of the Gods was voted the top city park by Tripadvisor in 2014. The Trading Post sits at the locals' hidden entrance to the park, next to Balanced Rock: stop in, grab a bite on the patio, then head out to explore.</p>
          <dl className="hours">
            {HOURS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <p className="small">Open every day except Thanksgiving and Christmas.</p>
          <a className="btn btn-rock" href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap story-grid">
        <div className="story-head">
          <p className="eyebrow light">Our story</p>
          <h2>Nearly a century at Balanced Rock.</h2>
          <div className="story-photos">
            <img src={MEDIA.bw} alt="The Trading Post in an early black-and-white photo" loading="lazy" />
            <img src={MEDIA.early} alt="Garden of the Gods around 1915" loading="lazy" />
          </div>
        </div>
        <ol className="timeline">
          {TIMELINE.map(([year, text]) => <li key={year}><span>{year}</span><p>{text}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section className="groups" id="groups">
      <div className="wrap groups-grid">
        <article className="group-card">
          <Users size={30} />
          <h3>Large groups &amp; tours</h3>
          <p>Bringing a tour, school trip or reunion? Call ahead to plan your group's visit to the shop and restaurant.</p>
          <a href={PHONE_HREF}>Call {PHONE}</a>
        </article>
        <article className="group-card">
          <UtensilsCrossed size={30} />
          <h3>Private events</h3>
          <p>Celebrate with the red rocks as your backdrop. Ask about private dining and events at the Trading Post.</p>
          <a href={`mailto:${EMAIL}`}>Email us</a>
        </article>
        <article className="group-card">
          <Store size={30} />
          <h3>Our family of stores</h3>
          <p>Find more of our shops in Manitou Springs and Old Colorado City, plus the Colorado Retail Collection online.</p>
          <a href={ORIGINAL} target="_blank" rel="noopener noreferrer">See all stores</a>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Find us</p>
          <h2>See you at the post.</h2>
          <dl className="directory">
            <div><dt>Address</dt><dd>{ADDRESS}</dd></div>
            <div><dt>Phone</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
          </dl>
          <div className="socials">
            <a href="https://www.facebook.com/GOTGTP/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/gogtradingpost" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="map"><iframe title={`Map to ${COMPANY}`} src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=14&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="parapet flip" aria-hidden="true" />
      <div className="wrap footer-row">
        <img src={LOGO} alt={`${COMPANY} logo`} className="footer-logo" />
        <div className="footer-links"><a href="#inside">Inside the Post</a><a href="#visit">Plan a Visit</a><a href="#story">Our Story</a><a href="#groups">Groups &amp; Events</a></div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY}. Independent concept · not for official use. Current site: <a href={ORIGINAL}>gardenofthegodstradingpost.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TodayBar />
        <Inside />
        <Visit />
        <Story />
        <Groups />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
