import { Heading } from "grommet";
import { FC } from "react";
import { Board } from "trello.js/out/api/models";
import { BoardThumbnail } from ".";
import { useOrganization } from "../../hooks/trello/useOrganization";

export interface IProps {
  boards: Board[];
}

export const ThumbnailList: FC<IProps> = (props) => {
  const { boards } = props;
  const organization = useOrganization(boards[0].idOrganization ?? "");

  return (
    <>
      <Heading>{organization?.displayName ?? "N/C"}</Heading>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {boards.map((board, i) => (
          <BoardThumbnail board={board} key={i} />
        ))}
      </div>
    </>
  );
};
