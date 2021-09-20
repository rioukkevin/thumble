import { useEffect, useState } from "react";
import { Organization } from "trello.js/out/api/models";
import { useTrello } from "./useTrello";

export const useOrganization = (id: string) => {
  const { trello } = useTrello();

  const [organization, setOrganization] = useState<Organization | undefined>();

  useEffect(() => {
    const run = async () => {
      if (trello) {
        try {
          const orga = await trello.organizations.getOrganization({ id });
          setOrganization(orga);
        } catch (error) {
          console.log("Whooopsi");
        }
      }
    };
    run();
  }, [trello, id]);

  return organization;
};
