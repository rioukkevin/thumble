import { Card, Image } from "grommet";
import { FC } from "react";
import { Board } from "trello.js/out/api/models";

export interface IProps {
  board: Board;
  onClick: () => void;
}

const CARD_WIDTH = 250;
const CARD_HEIGHT = 160;

export const Thumbnail: FC<IProps> = (props) => {
  const { board, onClick } = props;

  //@ts-ignore
  const bgUrl = board.prefs?.backgroundImageScaled[1].url;

  return (
    <Card
      background="light-1"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        margin: 10,
      }}
      onClick={onClick}
    >
      <Image
        src={bgUrl}
        style={{
          minHeight: CARD_HEIGHT,
          minWidth: CARD_WIDTH,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          color: "white",
          textShadow: "2px 2px #00000066",
          fontWeight: "bold",
        }}
      >
        {board.name}
      </div>
    </Card>
  );
};
