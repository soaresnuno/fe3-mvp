import "./App.css";
import ScoreBoard from "./components/scoreboard";
import Box from "./components/shared/box";
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
          <div>
            <Typography text="Report" fontWeight={600} fontSize={20} />
          </div>

          <ul style={{ marginLeft: 12, marginTop: 12, padding: 0 }}>
            <li
              style={{
                listStyleType: "none",
                marginTop: "6px",
                marginBottom: "6px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Box
                  background="cyan"
                  borderColor="blue"
                  width={20}
                  height={20}
                />
                <Typography text="10 hits, 2 streak, avg click time: 0.5s" />
              </div>
            </li>

            <li
              style={{
                listStyleType: "none",
                marginTop: "6px",
                marginBottom: "6px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Box
                  background="yellow"
                  borderColor="red"
                  width={20}
                  height={20}
                />
                <Typography text="10 hits, 2 streak, avg click time: 0.5s" />
              </div>
            </li>

            <li
              style={{
                listStyleType: "none",
                marginTop: "6px",
                marginBottom: "6px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Box
                  background="purple"
                  borderColor="green"
                  width={20}
                  height={20}
                />
                <Typography text="10 hits, 2 streak, avg click time: 0.5s" />
              </div>
            </li>
          </ul>
        </section>
      </main>
    </PageWrapper>
  );
}

export default App;
