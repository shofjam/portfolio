import { Link } from "react-router-dom";

const navigationItems = [
  { label: "Home", to: "/portfolio" },
  { label: "About", to: "/portfolio/about-me" },
  { label: "Work", to: "/portfolio/portfolio" },
  { label: "Contact", to: "/portfolio/contact" },
];

const Navigations = () => (
  <header className="site-header">
    <div className="shell nav-shell">
      <Link className="brand" to="/portfolio" aria-label="Shofhal Jamil home">
        <span className="brand-mark">SJ</span>
        <span>
          <strong>Shofhal Jamil</strong>
          <small>Full-stack developer</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" to="/portfolio/contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </Link>
    </div>
  </header>
);

export default Navigations;