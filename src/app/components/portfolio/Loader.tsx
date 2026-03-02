import { useEffect, useState } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.floor(p));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="PORT-LOAD" className={done ? 'off' : ''}>
      <div className="ld-line"><span>Husain</span></div>
      <div className="ld-line"><span>Bhatiya</span></div>
      <div className="ld-line"><span>Portfolio</span></div>
      <div className="ld-prog">{progress}%</div>
    </div>
  );
}
