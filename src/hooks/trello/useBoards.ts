import { useEffect, useState } from "react";
import { Board } from "trello.js/out/api/models";
import { useMember } from "./useMember";
import { useTrello } from "./useTrello";

export const useBoards = () => {
  const { trello } = useTrello();
  const member = useMember();

  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const run = async () => {
      if (member) {
        const bds = await trello.members.getMemberBoards({
          id: member.id ?? "",
        });
        setBoards(bds);
      }
    };
    run();
  }, [trello, member]);

  return boards;
};
