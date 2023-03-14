import styled, { css } from "styled-components";
import { BoxTypes } from "./types";

export const StyledBox = styled.div<BoxTypes>`
  ${({ style }) => style && { ...style }}
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
