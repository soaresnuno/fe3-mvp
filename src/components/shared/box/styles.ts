import styled, { css } from "styled-components";
import { BoxTypes } from "./types";

export const StyledBox = styled.div<BoxTypes>`
	${({ overflow }) =>
		overflow &&
		css`
			overflow: ${overflow};
		`};

	${({ top }) =>
		top &&
		css`
			top: ${top}px;
		`};

	${({ left }) =>
		left &&
		css`
			left: ${left}px;
		`};

	${({ position }) =>
		position &&
		css`
			position: ${position};
		`};

	${({ width }) =>
		width &&
		css`
			width: ${width}px;
		`};

	${({ height }) =>
		height &&
		css`
			height: ${height}px;
		`};

	${({ background }) =>
		background &&
		css`
			background: ${background};
		`};

	${({ borderColor }) =>
		borderColor &&
		css`
			border: 2px solid ${borderColor};
		`};
`;
