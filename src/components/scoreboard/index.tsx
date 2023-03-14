import Display from "./display";
import ScoreBoardFooter from "./footer";
import ScoreBoardHeader from "./header";

export default function ScoreBoard() {
  return (
    <>
      <ScoreBoardHeader />
      <Display />
      <ScoreBoardFooter />
    </>
  );
}
