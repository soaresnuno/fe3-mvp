import { CSSProperties } from "react";
import { StyledBox } from "./styles";
import { BoxTypes } from "./types";

export default function Box({
  width,
  height,
  background,
  borderColor,
  children,
  ...rest
}: BoxTypes) {
  return (
    <StyledBox
      width={width}
      height={height}
      background={background}
      borderColor={borderColor}
      style={{ ...(rest as CSSProperties) }}
    >
      {children}
    </StyledBox>
  );
}
