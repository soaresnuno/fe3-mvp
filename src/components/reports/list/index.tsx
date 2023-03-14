import { ReactNode } from "react";
import { List } from "./styles";

export default function ReportList({ children }: { children: ReactNode }) {
  return <List>{children}</List>;
}
