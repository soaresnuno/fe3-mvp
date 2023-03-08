import "./App.css";
import Box from "./components/shared/box";
import Button from "./components/shared/button";
import Typography from "./components/shared/typography";

function App() {
  return (
    <div>
      <Box
        width={200}
        height={200}
        background="orangered"
        borderColor="black"
      />
      <Typography
        text="testasdasd"
        fontColor="black"
        fontSize={20}
        fontWeight="thin"
      />
      <Button text="button1" onClick={() => alert("works")} />
    </div>
  );
}

export default App;
