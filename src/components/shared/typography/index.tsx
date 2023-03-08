import { TypographyProps } from "./types";

export default function Typography({
  fontColor,
  fontSize,
  fontWeight,
  text,
}: TypographyProps) {
  return (
    <span
      style={{
        color: `${fontColor ?? "black"}`,
        fontSize: `${fontSize ?? 16}px`,
        fontWeight: `${fontWeight ?? 400}`,
      }}
    >
      {text}
    </span>
  );
}
