import { useEffect, useState } from "react";
import { Member } from "trello.js/out/api/models";
import { useTrello } from "./useTrello";

export const useMember = (): Member | undefined => {
  const { trello, token } = useTrello();

  const [member, setMember] = useState<Member | undefined>(undefined);

  useEffect(() => {
    const run = async () => {
      if (token) {
        const memberData = await trello.tokens.getTokenMember({ token });
        setMember(memberData);
      }
    };
    run();
  }, [trello, token]);

  return member;
};
