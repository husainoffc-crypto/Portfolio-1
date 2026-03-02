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
        cur.style.left = cx + 'px';
        cur.style.top = cy + 'px';
      }
    };

    const lerp = () => {
      rx += (cx - rx) * 0.1;
      ry += (cy - ry) * 0.1;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(lerp);
    };

    document.addEventListener('mousemove', onMouseMove);
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
      <div id="PORT-CUR" style={{ position: 'fixed' }}>
        <div className="c-dot" />
      </div>
      <div id="PORT-RING" />
    </>
  );
}
