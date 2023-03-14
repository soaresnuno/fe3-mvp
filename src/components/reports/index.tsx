import ReportHeader from "./header";
import ReportList from "./list";
import ListItem from "./list-items";
import { ReportListWrapper } from "./styles";

export default function Report() {
  return (
    <>
      <ReportHeader />
      <ReportListWrapper>
        <ReportList>
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
        </ReportList>
        <ReportList>
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
        </ReportList>
        <ReportList>
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
          <ListItem
            text="10 hits, 2 streak, avg click time: 0.5s"
            color="cyan"
            borderColor="blue"
          />
        </ReportList>
      </ReportListWrapper>
    </>
  );
}
