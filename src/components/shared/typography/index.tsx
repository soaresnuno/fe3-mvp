import { StyledText } from "./styles";
import { TypographyProps } from "./types";

export default function Typography({
	fontColor,
	fontSize,
	fontWeight,
	text,
}: TypographyProps) {
	return (
		<StyledText
    fontColor={fontColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
		>
			{text}
		</StyledText>
	);
}
