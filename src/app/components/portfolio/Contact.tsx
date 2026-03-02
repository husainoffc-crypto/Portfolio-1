const links = [
  { label: 'Email', value: 'husainbhatiya647@gmail.com', href: 'mailto:husainbhatiya647@gmail.com' },
  { label: 'Phone', value: '+91 9004 01 6055', href: 'tel:+919004016055' },
  { label: 'LinkedIn', value: 'husain-bhatiya-a77b4821a', href: 'https://www.linkedin.com/in/husain-bhatiya-a77b4821a/' },
  { label: 'Behance', value: 'behance.net/husainbhatiya', href: 'https://www.behance.net/husainbhatiya/projects' },
];

const languages = ['English', 'Hindi', 'Gujarati', 'Marathi'];
const hobbies = [
  { emoji: '📚', label: 'Reading' },
  { emoji: '🎬', label: 'Video Editing' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '🎨', label: 'Painting' },
];

export function Contact() {
  return (
    <section id="contact">
      <div className="ct-l rv">
        <h2 className="ct-head">
          <span className="cth-a">LET'S</span>
          <span className="cth-b">BUILD</span>
          <span className="cth-c">TOGETHER.</span>
        </h2>
        <div className="ct-links">
          {links.map((lk) => (
            <a
              key={lk.label}
              href={lk.href}
              className="clink"
              target={lk.href.startsWith('http') ? '_blank' : undefined}
              rel={lk.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <div>
                <div className="cl-n">{lk.label}</div>
                <div className="cl-v">{lk.value}</div>
              </div>
              <span className="cl-arr">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="ct-r rv d2">
        <div className="ctr-top">
          <p className="ctr-q">
            "From wireframe to working product — I bring both the vision and the rigour to make it real."
          </p>
          <div className="ct-meta">
            <div className="ctm">
              <div className="ctm-lbl">Languages Spoken</div>
              <div className="ctm-pills">
                {languages.map((l) => (
                  <div key={l} className="ctm-p">{l}</div>
                ))}
              </div>
            </div>
            <div className="ctm">
              <div className="ctm-lbl">Hobbies & Interests</div>
              <div className="ctm-pills">
                {hobbies.map((h) => (
                  <div key={h.label} className="hob-p">
                    {h.emoji} {h.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ctr-b">
          Available for full-time, freelance, or contract roles.<br />
          Response within 24 hours guaranteed.
        </div>
      </div>
    </section>
  );
}
