import { useEffect, useState } from "react";
import { Organization } from "trello.js/out/api/models";
import { useTrello } from "./useTrello";

export const useOrganization = (id: string) => {
  const { trello } = useTrello();

  const [organization, setOrganization] = useState<Organization | undefined>();

  useEffect(() => {
    const run = async () => {
      const orga = await trello.organizations.getOrganization({ id });
      setOrganization(orga);
    };
    run();
  }, [trello, id]);

  return organization;
};
