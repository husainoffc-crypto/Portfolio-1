export function About() {
  return (
    <section id="about">
      <div className="ab-l rv">
        <div className="ab-sec-num">// 01 — About Me</div>
        <h2 className="ab-heading">
          Design<br />
          <span className="abh-faint">that</span><br />
          Works.
        </h2>
        <p className="ab-text">
          I'm Husain — a UI/UX Designer and Software Tester who bridges the gap between beautiful interfaces and bulletproof functionality. My dual expertise means I don't just design how things look — I make sure they actually work.
        </p>
        <p className="ab-text">
          With hands-on experience at Runtime Solutions and Inovant Solutions, I've taken projects from rough ideas to live products that real customers use daily. I obsess over detail — responsiveness, accessibility, consistency — making every screen feel effortless.
        </p>
        <a href="#contact" className="ab-cta">Get in touch →</a>
      </div>

      <div className="ab-r rv d2">
        <div className="ab-card">
          <div className="ab-card-lbl">// Career Objective</div>
          <p className="ab-card-q">
            "To leverage my expertise in software testing and UI/UX design to ensure high-quality, user-centric solutions contributing to seamless digital experiences and robust software performance."
          </p>
        </div>
        <div className="edu">
          <div className="edu-yr">2022</div>
          <div className="edu-d">Bachelor's Degree</div>
          <div className="edu-s">Thakur Ramnarayan College</div>
          <div className="edu-g">CGPA: 8.9</div>
        </div>
        <div className="certs">
          <div className="cert">Software Tester — Q Spider's</div>
          <div className="cert">UI/UX Designer — Just Academy</div>
        </div>
      </div>
    </section>
  );
}
