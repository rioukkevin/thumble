import { useEffect, useState } from "react";
import { Card } from "trello.js/out/api/models";
import { useTrello } from "./useTrello";

export const useBoardCards = (id: string) => {
  const { trello } = useTrello();

  const [boardCards, setBoardCards] = useState<Card[]>([]);

  useEffect(() => {
    const run = async () => {
      if (trello) {
        try {
          const boaL = await trello.cards.getCardBoard({ id });
          setBoardCards(boaL as Card[]);
        } catch (error) {
          console.log("Whooopsi");
        }
      }
    };
    run();
  }, [trello, id]);

  return boardCards;
};
