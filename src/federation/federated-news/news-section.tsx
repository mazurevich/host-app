import { FC } from "react";
import { Loader } from "@/components";
import { FederatedModule } from "@/federation/federated-module";
import { checkIsMobile } from "@/utils";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BasicRoutePath } from "@/constants";
import { useToken } from "@/hooks";
import {
  FederatedNewsProps,
  NewsMessageToHost,
  NewsMessageType,
  NewsRedirectPayload,
} from "@/federation/federated-news/types";
import { ToasterShowPayload } from "../federated-module/types";
import { handleToastMessage } from "@/federation/federated-module/utils";
import {
  DEFAULT_NEWS_FEDERATION_URL,
  DEFAULT_NEWS_MODULE,
  SCOPE,
} from "@/federation/federated-news/constants";

export const NewsSection: FC<FederatedNewsProps> = ({ className }) => {
  const remoteModuleUrl = window.NEWS_REMOTE_URL || DEFAULT_NEWS_FEDERATION_URL;
  const navigate = useNavigate();

  const { token, updateToken } = useToken();

  const { module, "*": subPath } = useParams();

  const options = {
    isMobile: checkIsMobile(),
    subPath,
    token,
  };

  const handleNewsMessage = (message: NewsMessageToHost) => {
    // eslint-disable-next-line no-console
    console.log(message);

    switch (message.type) {
      case NewsMessageType.TokenRetrieve:
        updateToken();
        break;
      case NewsMessageType.NewsRedirect: {
        const { path } = message.payload as NewsRedirectPayload;
        navigate(`${BasicRoutePath.News}/${path}`);
        break;
      }
      case NewsMessageType.ToasterShow:
        handleToastMessage(message.payload as ToasterShowPayload);
        break;
      default:
        // eslint-disable-next-line no-console
        console.log("Unhandled message type", message);
    }
  };

  if (!module) {
    return <Navigate to={`${BasicRoutePath.News}/${DEFAULT_NEWS_MODULE}`} />;
  }

  if (!token) {
    return <Loader />;
  }

  return (
    <FederatedModule
      url={`${remoteModuleUrl}/remoteEntry.js`}
      scope={SCOPE}
      className={className}
      module={`./${module}`}
      messageToHostFunction={handleNewsMessage}
      loadingFallback={<Loader />}
      options={options}
    />
  );
};
