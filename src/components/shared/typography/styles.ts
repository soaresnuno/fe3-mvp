import styled, { css } from "styled-components";
import { TypographyStylingProps } from "./types";

export const StyledText = styled.span<TypographyStylingProps>`
	${({ color }) =>
		color
			? css`
					color: ${color};
			  `
			: css`
					color: black;
			  `};

	${({ fontSize }) =>
		fontSize
			? css`
					font-size: ${fontSize}px;
			  `
			: css`
					font-size: 16px;
			  `};

	${({ fontWeight }) =>
		fontWeight
			? css`
					font-weight: ${fontWeight}; //or 400
			  `
			: css`
					font-weight: 400;
			  `};
`;

/* color: ${({ color }) => (color === "" ? "black" : color)}; */
/* color: ${({ color }) => color ? color : 'black }; */
