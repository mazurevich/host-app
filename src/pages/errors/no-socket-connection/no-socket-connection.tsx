import { NoData } from "@/components";
import { NoResults } from "src/assets/illustrations";

export const NoSocketConnection = () => {
  const handleButtonClick = () => window.location.reload();

  // TODO: Change some icon props when the right one will be known
  return (
    <NoData
      icon={<NoResults />}
      title="No socket connection"
      subtitle="The socket connection can't be established. Please, try to reload the application"
      buttonText="Reload"
      onClick={handleButtonClick}
    />
  );
};
