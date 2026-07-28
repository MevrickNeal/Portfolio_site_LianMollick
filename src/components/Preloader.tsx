import React, { useEffect, useRef } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = preloaderRef.current;
    if (!el) return;

    // Step 1: Reveal words
    requestAnimationFrame(() => {
      el.classList.add("reveal", "loading");
    });

    // Step 2: After 2s, start exit panels
    const t1 = setTimeout(() => {
      el.classList.add("exit");
    }, 2200);

    // Step 3: After panels exit, remove preloader
    const t2 = setTimeout(() => {
      el.style.display = "none";
      onComplete();
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-top">
        <div className="preloader-word-top">LIAN</div>
      </div>
      <div className="preloader-bottom">
        <div className="preloader-word-bottom">MOLLICK</div>
      </div>
      <div className="preloader-bar-wrap">
        <div className="preloader-bar" />
      </div>
      <div className="preloader-panels">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="preloader-panel" />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
