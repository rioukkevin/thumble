import { Card, Image, Main } from "grommet";
import { FC } from "react";
import { BoardThumbnail } from ".";
import { useBoards } from "../../hooks/trello/useBoards";

export interface IProps {}

export const List: FC<IProps> = () => {
  const boards = useBoards();
  return (
    <Main pad="large" justify="start" align="start" wrap direction="row">
      {boards.map((board, i) => (
        <BoardThumbnail board={board} key={i} />
      ))}
    </Main>
  );
};
