import { ImageResponse } from "next/og";

export const alt = "Screen Doctor — professional display diagnostics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "radial-gradient(circle at 70% 20%, #1f4150, #07090d 55%)",
        color: "white",
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26 }}>
        <div style={{ width: 22, height: 22, borderRadius: 7, background: "#b7f7e5" }} />
        SCREEN DOCTOR
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 78, fontWeight: 600, letterSpacing: -4 }}>Перевірте кожен піксель.</div>
        <div style={{ fontSize: 30, color: "#aab1bc" }}>20 тестів. 30 секунд. Жодної реєстрації.</div>
      </div>
    </div>,
    size,
  );
}
