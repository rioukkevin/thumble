import { Main } from "grommet";
import { FC } from "react";
import { useParams } from "react-router";
import { useBoard } from "../../hooks/trello/useBoard";
import { useBoardCards } from "../../hooks/trello/useBoardCards";
import { IRouteParams } from "../../router/routes";

export interface IProps {}

export const Get: FC<IProps> = () => {
  const { id } = useParams<IRouteParams["private"]["board"]>();
  const board = useBoard(id);
  const cards = useBoardCards(id);

  // const groupedCards = groupBy(cards, "idList");

  console.log(board, cards);

  return (
    <Main pad="large" justify="start" align="start" wrap direction="column">
      {board?.name ?? "Oupsi"}
    </Main>
  );
};
