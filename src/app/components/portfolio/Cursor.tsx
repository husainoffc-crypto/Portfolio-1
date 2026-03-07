import { useEffect } from 'react';

export function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('PORT-CUR');
    const ring = document.getElementById('PORT-RING');
    let cx = 0, cy = 0, rx = 0, ry = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (cur) {
        cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      }
    };

    const lerp = () => {
      rx += (cx - rx) * 0.15;
      ry += (cy - ry) * 0.15;
      if (ring) {
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      animId = requestAnimationFrame(lerp);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    animId = requestAnimationFrame(lerp);

    const handleOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest('a,button,.hng,.proj-row,.exp-item,.sk-block,.chip,.ctm-p,.hob-p,.cert')) {
        document.body.classList.add('cursor-H');
      }
    };
    const handleOut = (e: MouseEvent) => {
      const t = e.target as Element;
      if (!t.closest('a,button,.hng,.proj-row,.exp-item,.sk-block,.chip,.ctm-p,.hob-p,.cert')) {
        document.body.classList.remove('cursor-H');
      }
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="PORT-CUR">
        <div className="c-dot" />
      </div>
      <div id="PORT-RING" />
    </>
  );
}
