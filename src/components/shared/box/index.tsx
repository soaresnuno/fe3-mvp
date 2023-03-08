import { BoxTypes } from "./types";

export default function Box({
  width,
  height,
  background,
  borderColor,
  children,
}: BoxTypes) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `${background}`,
        border: `2px solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
}
