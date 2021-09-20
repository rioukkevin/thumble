import { Main } from "grommet";
import { FC } from "react";
import { useHistory } from "react-router";
import { groupBy } from "underscore";
import { useBoards } from "../../hooks/trello/useBoards";
import { ROUTES } from "../../router/routes";
import { ThumbnailList } from "./ThumbnailList.component";

export interface IProps {}

export const List: FC<IProps> = () => {
  const boards = useBoards();
  const { push } = useHistory();

  const groupedBoard = Object.values(groupBy(boards, "idOrganization")).sort(
    (a, b) => b.length - a.length
  );

  const handleClick = (id: string) => {
    push(ROUTES.private.board.replace(":id", id));
  };

  return (
    <Main pad="large" justify="start" align="start" wrap direction="column">
      {groupedBoard.map((board, i) => (
        <ThumbnailList boards={board} onClick={handleClick} />
      ))}
    </Main>
  );
};
