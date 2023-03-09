import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export default function Button({ text, onClick }: ButtonProps) {
	return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

/*  style={{
        padding: "10px 20px",
        cursor: "pointer",
        border: "3px solid black",
        backgroundColor: "white",
        color: "black",
      }}
      onClick={onClick} */
