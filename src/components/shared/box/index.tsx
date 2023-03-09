import { CSSProperties } from "react";
import { BoxTypes } from "./types";

export default function Box({
  width,
  height,
  background,
  borderColor,
  children,
  ...rest
}: BoxTypes & CSSProperties) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `${background}`,
        border: `2px solid ${borderColor}`,
        ...rest,
      }}
    >
      {children}
    </div>
  );
}
