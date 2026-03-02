import { useEffect, useRef, useState } from 'react';

const phrases = [
  'Crafting seamless digital experiences.',
  'Designing interfaces that feel intuitive.',
  'Testing software so nothing breaks.',
  'Pixels meet precision — that\'s my work.',
];

export function Hero() {
  const [text, setText] = useState('');
  const stateRef = useRef({ pi: 0, ci: 0, del: false });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const { pi, ci, del } = stateRef.current;
      const ph = phrases[pi];
      if (!del) {
        const next = ci + 1;
        setText(ph.slice(0, next));
        stateRef.current.ci = next;
        if (next === ph.length) {
          stateRef.current.del = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        const next = ci - 1;
        setText(ph.slice(0, next));
        stateRef.current.ci = next;
        if (next === 0) {
          stateRef.current.del = false;
          stateRef.current.pi = (pi + 1) % phrases.length;
        }
      }
      timeout = setTimeout(type, stateRef.current.del ? 40 : 70);
    }

    timeout = setTimeout(type, 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero">
      <div className="h-left">
        <div className="h-rotated">DESIGNER</div>
        <div className="h-top">
          <div className="h-eyebrow">
            <div className="h-ey-line" />
            UI/UX × Software Testing
          </div>
          <h1 className="h-name">
            <div className="hn-row"><span>HU<br />SAIN</span></div>
            <div className="hn-row"><span>BHAT<br />IYYA</span></div>
          </h1>
        </div>
        <div className="h-bottom">
          <p className="h-typewriter">{text}</p>
          <div className="h-chips">
            <div className="chip on">Figma</div>
            <div className="chip on">Adobe XD</div>
            <div className="chip">Selenium</div>
            <div className="chip">Wireframing</div>
            <div className="chip">Manual QA</div>
            <div className="chip">Automation</div>
            <div className="chip">UX Research</div>
          </div>
        </div>
      </div>

      <div className="h-right">
        <div className="h-number-grid">
          <div className="hng">
            <div className="hng-n">10<sup>+</sup></div>
            <div className="hng-l">Websites Designed</div>
          </div>
          <div className="hng">
            <div className="hng-n">2</div>
            <div className="hng-l">Live Products</div>
          </div>
          <div className="hng">
            <div className="hng-n">12<sup>+</sup></div>
            <div className="hng-l">Projects Tested</div>
          </div>
          <div className="hng">
            <div className="hng-n">8.9</div>
            <div className="hng-l">CGPA Score</div>
          </div>
        </div>

        <div className="h-right-bottom">
          <div className="hr-tag">// Based in Mumbai, India</div>
          <p className="hr-quote">"Every pixel placed with purpose. Every test case written with care."</p>
          <div className="hr-info">
            <div className="hri">
              <span className="hri-l">Status</span>
              <span className="hri-v" style={{ color: 'var(--acc)' }}>● Open to Work</span>
            </div>
            <div className="hri">
              <span className="hri-l">Experience</span>
              <span className="hri-v">1.2 Years</span>
            </div>
            <div className="hri">
              <span className="hri-l">Education</span>
              <span className="hri-v">Bachelor's, 2022</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-scroll-hint">
        <span>Scroll</span>
        <div className="sh-line" />
      </div>
    </section>
  );
}
