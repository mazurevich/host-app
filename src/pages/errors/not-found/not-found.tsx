import { useNavigate } from "react-router-dom";
import { NoData } from "@/components";
import { checkIsMobile } from "@/utils";
import { BasicRoutePath } from "@/constants";
import { NoResults } from "@/assets/illustrations";

export const NotFound = () => {
  const isMobile = checkIsMobile();
  const navigate = useNavigate();
  const handleButtonClick = () => navigate(BasicRoutePath.Home);

  return (
    <NoData
      icon={<NoResults />}
      title="Oooops! We couldn't find this page"
      subtitle="The page is missing or you assembled the link incorrectly"
      // TODO: Change buttonText when the right one will be known
      buttonText={isMobile ? "Back To Home" : ""}
      onClick={handleButtonClick}
    />
  );
};
