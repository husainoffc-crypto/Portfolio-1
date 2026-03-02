export function Nav() {
  return (
    <nav className="port-nav">
      <a href="#hero" className="logo">HB<em>.</em></a>
      <div className="nav-r">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-btn"><span>Hire Me</span></button>
      </div>
    </nav>
  );
}
