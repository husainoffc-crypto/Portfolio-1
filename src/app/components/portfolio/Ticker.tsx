const items = [
  'UI/UX Design', 'Figma', 'Adobe XD', 'Selenium',
  'Manual QA', 'Wireframing', 'Prototyping', 'Automation',
];

export function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="port-ticker">
      <div className="tk-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="tk-i">{item}</span>
            <span className="tk-i acc">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
