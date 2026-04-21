/**
 * Floating panel rendered only when running `vite dev` (or any non-prod
 * build). Lets you fire synthetic errors / rejections / render errors to
 * verify the GlitchTip pipeline end-to-end.
 * Tree-shaken out of production builds via `import.meta.env.PROD`.
 */
import { useState } from "react";

function ThrowInRender(): null {
  throw new Error("GlitchTip smoke test · thrown during React render");
}

export function DevTestPanel() {
  const [boom, setBoom] = useState(false);
  if (import.meta.env.PROD) return null;

  const handlerError = () => {
    throw new Error("GlitchTip smoke test · thrown from click handler");
  };

  const rejectPromise = () => {
    // Unhandled rejection path
    void Promise.reject(new Error("GlitchTip smoke test · unhandled rejection"));
  };

  return (
    <div style={panelStyle} role="region" aria-label="GlitchTip test panel">
      <strong style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>
        Dev · GlitchTip test
      </strong>
      <button style={btn} onClick={handlerError}>Throw sync error</button>
      <button style={btn} onClick={rejectPromise}>Reject promise</button>
      <button style={btn} onClick={() => setBoom(true)}>Throw in render</button>
      {boom && <ThrowInRender />}
    </div>
  );
}

const panelStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 16,
  right: 16,
  zIndex: 1000,
  background: "#0B3D2E",
  color: "#fff",
  padding: "12px 14px",
  borderRadius: 10,
  boxShadow: "0 14px 30px rgba(0,0,0,.25)",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  width: 210,
  fontFamily: "Inter, Arial, sans-serif",
};

const btn: React.CSSProperties = {
  background: "#E1001A",
  color: "#fff",
  border: 0,
  padding: "8px 10px",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 12,
};
