const projects = [
  {
    idx: '01',
    title: 'Food It — Food Ordering App',
    desc: 'A clean, user-friendly food-ordering app in Figma. Focused on intuitive navigation and visual simplicity — wireframes, a cohesive UI system, streamlined menus, customizable orders, and an efficient checkout flow.',
    tags: ['Figma', 'Mobile App', 'UX Design', 'Prototyping'],
    icon: '🍔',
    type: 'Mobile Design',
  },
  {
    idx: '02',
    title: 'Lazy Project — Architect Portfolio',
    desc: 'A minimalist architect portfolio in Figma with clean grids, immersive project displays, and intuitive navigation. Visual-first, fast loading, and fully responsive.',
    tags: ['Figma', 'Portfolio', 'Responsive'],
    icon: '🏛',
    type: 'Web Design',
  },
  {
    idx: '03',
    title: 'Ticket Booking System',
    desc: 'A functional web application built with HTML, CSS, and Bootstrap — front-end development with UX sensibility and clean accessible component architecture.',
    tags: ['HTML/CSS', 'Bootstrap', 'Web App'],
    icon: '🎟',
    type: 'Frontend Dev',
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="proj-intro rv">
        <div className="pi-title">
          <div className="pit-a">SELECTED</div>
          <div className="pit-b">WORKS</div>
        </div>
        <p className="pi-note">
          Academic and professional projects spanning mobile apps, web platforms, and design systems.
        </p>
      </div>

      {projects.map((p) => (
        <div key={p.idx} className="proj-row rv">
          <div className="proj-idx"><span>{p.idx}</span></div>
          <div className="proj-body">
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-tags">
              {p.tags.map((t) => (
                <span key={t} className="pt">{t}</span>
              ))}
            </div>
          </div>
          <div className="proj-meta">
            <div className="pm-ico">{p.icon}</div>
            <div className="pm-type">{p.type}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
