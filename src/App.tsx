import "./App.css";
import Report from "./components/reports";
import ScoreBoard from "./components/scoreboard";
import Typography from "./components/shared/typography";
import { PageWrapper } from "./globalStyles";

function App() {
  return (
    <PageWrapper>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "60px",
        }}
      >
        <Typography text="Some stupid thing" fontSize={20} fontWeight={800} />
      </header>
      <main>
        <section>
          <ScoreBoard />
        </section>
        <section>
          <Report />
        </section>
      </main>
    </PageWrapper>
  );
}

export default App;
