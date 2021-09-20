import { useEffect, useState } from "react";
import { Board } from "trello.js/out/api/models";
import { useTrello } from "./useTrello";

export const useBoard = (id: string) => {
  const { trello } = useTrello();

  const [board, setBoard] = useState<Board | undefined>();

  useEffect(() => {
    const run = async () => {
      if (trello) {
        try {
          const boa = await trello.boards.getBoard({ id });
          setBoard(boa);
        } catch (error) {
          console.log("Whooopsi");
        }
      }
    };
    run();
  }, [trello, id]);

  return board;
};
