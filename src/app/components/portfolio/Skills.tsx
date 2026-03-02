import { useRef } from 'react';

const skills = [
  {
    num: '01', icon: '🎨', name: 'UI Design',
    tags: ['Figma', 'Adobe XD', 'Design Systems', 'Style Guides', 'Responsive'],
  },
  {
    num: '02', icon: '🔭', name: 'UX Research',
    tags: ['User Personas', 'User Flows', 'Usability Testing', 'Wireframing'],
  },
  {
    num: '03', icon: '⚡', name: 'Prototyping',
    tags: ['Lo-Fi & Hi-Fi', 'Micro-interactions', 'Animations', 'Click-through Flows'],
  },
  {
    num: '04', icon: '🧪', name: 'Manual QA',
    tags: ['Smoke Testing', 'Regression', 'SDLC / STLC', 'Bugzilla', 'Test Cases'],
  },
  {
    num: '05', icon: '🤖', name: 'Automation',
    tags: ['Selenium WebDriver', 'XPath', 'GUI Testing', 'Eclipse', 'Locators'],
  },
  {
    num: '06', icon: '🛠', name: 'Dev Tools',
    tags: ['VS Code', 'HTML / CSS', 'Bootstrap', 'Mac OS 14', 'Windows 11'],
  },
];

export function Skills() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    dragRef.current = { isDown: true, startX: e.pageX - wrap.offsetLeft, scrollLeft: wrap.scrollLeft };
    wrap.classList.add('grabbing');
  };

  const onMouseLeave = () => {
    dragRef.current.isDown = false;
    wrapRef.current?.classList.remove('grabbing');
  };

  const onMouseUp = () => {
    dragRef.current.isDown = false;
    wrapRef.current?.classList.remove('grabbing');
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.isDown) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    e.preventDefault();
    const x = e.pageX - wrap.offsetLeft;
    wrap.scrollLeft = dragRef.current.scrollLeft - (x - dragRef.current.startX);
  };

  return (
    <section id="skills">
      <div className="sk-hero">
        <div className="skh-l rv">
          <div className="sk-title">SK</div>
          <div className="sk-title-real">My<br /><em>Skills</em></div>
        </div>
        <div className="skh-r rv d2">
          <p className="sk-desc">
            A rare combination of design craftsmanship and QA rigor — ensuring products are as robust as they are beautiful. Scroll right to explore →
          </p>
        </div>
      </div>

      <div
        className="sk-scroll-wrap"
        ref={wrapRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="sk-scroll">
          {skills.map((sk) => (
            <div key={sk.num} className="sk-block">
              <div className="sk-block-num">{sk.num}</div>
              <div className="sk-icon">{sk.icon}</div>
              <div className="sk-name">{sk.name}</div>
              <div className="sk-tags">
                {sk.tags.map((t) => (
                  <div key={t} className="sk-t">{t}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sk-drag-hint">
        <span className="dh-arrow">→</span>
        Drag or scroll to explore all skills
      </div>
    </section>
  );
}
