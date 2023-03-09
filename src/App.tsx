import "./App.css";
import Box from "./components/shared/box";
import Button from "./components/shared/button";
import Typography from "./components/shared/typography";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "60px",
        }}
      >
        <Typography text={"Some stupid thing"} fontSize={20} fontWeight={800} />
      </header>
      <main>
        <section>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography text="Score: 0" fontWeight={800} />
            <Typography text="0.00s" fontWeight={800} />
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Box
              position="relative"
              background="white"
              borderColor="black"
              overflow="hidden"
              width={800}
              height={600}
            >
              <Box
                position="absolute"
                top="40px"
                left="100px"
                background="yellow"
                borderColor="purple"
                width={40}
                height={40}
              />
              <Box
                position="absolute"
                top="10px"
                left="10px"
                background="green"
                borderColor="purple"
                width={80}
                height={80}
              />
              <Box
                position="absolute"
                top="300px"
                left="500px"
                background="red"
                borderColor="purple"
                width={200}
                height={200}
              />
              <Box
                position="absolute"
                top="400px"
                left="300px"
                background="cyan"
                borderColor="blue"
                width={100}
                height={100}
              />
            </Box>
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}
          >
            <Button text="Finish" onClick={() => {}} />
            <Button text="Play" onClick={() => {}} />
          </div>
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
    </div>
  );
}

export default App;
