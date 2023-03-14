import { Wrapper } from "./styles";
import Box from "../../shared/box";

export default function Display() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
