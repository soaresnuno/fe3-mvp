import { ReactNode } from "react";

export interface BoxTypes {
  background: string;
  borderColor: string;
  width: number;
  height: number;
  children?: ReactNode;
}
