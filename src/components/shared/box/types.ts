import { CSSProperties, ReactNode } from "react";

export interface BoxTypes {
  background: string;
  borderColor: string;
  width: number;
  height: number;
  children?: ReactNode;
  position?: string;
  overflow?: string;
  top?: string;
  left?: string;
  style?: CSSProperties;
}
