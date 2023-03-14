import Typography from "../../shared/typography";
import { Header } from "./styles";

export default function ScoreBoardHeader() {
  return (
    <Header>
      <Typography text="Score: 0" fontWeight={800} />
      <Typography text="0.00s" fontWeight={800} />
    </Header>
  );
}
