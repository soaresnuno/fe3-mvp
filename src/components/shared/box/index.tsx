import { StyledBox } from "./styles";
import { BoxTypes } from "./types";

export default function Box({
  position,
	width,
	height,
	background,
	borderColor,
	children,
	...rest
}: BoxTypes) {
	return (
		<StyledBox
			width={width}
			height={height}
			background={background}
			borderColor={borderColor}
			{...rest}
		>
			{children}
		</StyledBox>
	);
}
