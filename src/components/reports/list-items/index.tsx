import Box from "../../shared/box";
import Typography from "../../shared/typography";
import { ItemContainer, ItemInnerContainer } from "./styles";
import { ListItems } from "./types";

export default function ListItem({ text, color, borderColor }: ListItems) {
  return (
    <ItemContainer>
      <ItemInnerContainer>
        <Box
          background={color}
          borderColor={borderColor}
          width={20}
          height={20}
        />
        <Typography text={text} />
      </ItemInnerContainer>
    </ItemContainer>
  );
}
