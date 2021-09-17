import { Main } from "grommet";
import { FC } from "react";
import { groupBy } from "underscore";
import { useBoards } from "../../hooks/trello/useBoards";
import { ThumbnailList } from "./ThumbnailList.component";

export interface IProps {}

export const List: FC<IProps> = () => {
  const boards = useBoards();

  const groupedBoard = Object.values(groupBy(boards, "idOrganization")).sort(
    (a, b) => b.length - a.length
  );

  return (
    <Main pad="large" justify="start" align="start" wrap direction="column">
      {groupedBoard.map((board, i) => (
        <ThumbnailList boards={board} />
      ))}
    </Main>
  );
};
