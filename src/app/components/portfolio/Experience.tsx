export function Experience() {
  return (
    <section id="experience">
      <div className="exp-intro">
        <div className="exp-intro-l rv">
          <div className="exp-big">EXP</div>
        </div>
        <div className="exp-intro-r rv d2">
          <p className="exp-real">
            "Real-world roles shaping products people actually use — from pixels to passing tests."
          </p>
        </div>
      </div>

      <div className="exp-list">
        {/* Runtime Solutions */}
        <div className="exp-item rv">
          <div className="exp-l">
            <div>
              <div className="ex-yr">2024 — 2026</div>
              <div className="ex-co">Runtime<br />Solutions</div>
            </div>
            <div className="ex-role">UI/UX Designer</div>
          </div>
          <div className="exp-r">
            <div className="exp-r-head">
              1 Years<br />
              <span style={{ color: 'var(--mid)', fontSize: '0.6em' }}>(incl. 3-mon Internship)</span>
            </div>
            <ul className="exp-r-list">
              <li className="erl">Designed user interfaces and experiences for web and mobile products using Figma and Adobe XD.</li>
              <li className="erl">Created wireframes, user flows, and high-fidelity prototypes from concept to final design.</li>
              <li className="erl">Collaborated with developers and stakeholders to align design with product goals.</li>
              <li className="erl">Ensured designs were responsive, accessible, and consistent across all platforms.</li>
              <li className="erl">Participated in user research and incorporated feedback into design iterations.</li>
            </ul>
          </div>
        </div>

        {/* Inovant Solutions */}
        <div className="exp-item rv">
          <div className="exp-l">
            <div>
              <div className="ex-yr">2023 — 2024</div>
              <div className="ex-co">Inovant<br />Solutions</div>
            </div>
            <div className="ex-role">QA Tester</div>
          </div>
          <div className="exp-r">
            <div className="exp-r-head">1.2 Years</div>
            <ul className="exp-r-list">
              <li className="erl">Developed test plans, test cases, scripts, and reports across 12+ projects.</li>
              <li className="erl">Executed manual tests to identify software defects and reported them to the development team.</li>
              <li className="erl">Automated test cases using Selenium WebDriver and maintained comprehensive test data.</li>
              <li className="erl">Performed functional, system, regression, and UI testing cycles end-to-end.</li>
              <li className="erl">Conducted stress, performance, and scalability testing on live applications.</li>
              <li className="erl">Ran ADHOC, compatibility, and GUI testing across multiple platforms.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
