import { PropsWithChildren } from "react";
import { AuthenticatedTemplate, MsalProvider } from "@azure/msal-react";
import {
  AccountInfo,
  AuthenticationResult,
  PublicClientApplication,
} from "@azure/msal-browser";

import { msalConfig, redirectRequestConfig } from "@/auth-config";

export const msal = new PublicClientApplication(msalConfig);

const accounts: AccountInfo[] = msal.getAllAccounts();

msal.enableAccountStorageEvents();

const account: AccountInfo = accounts[0];

const handleRedirectPromise = async () => {
  try {
    const response: AuthenticationResult | null =
      await msal.handleRedirectPromise();

    if (!response) {
      msal.loginRedirect(redirectRequestConfig);
      return;
    }

    const { account }: AuthenticationResult = response;

    msal.setActiveAccount(account);
  } catch (error) {
    // log errors
  }
};

if (!msal.getActiveAccount()) {
  account ? msal.setActiveAccount(account) : handleRedirectPromise();
}

export const AuthProvider: React.FC<PropsWithChildren<object>> = ({
  children,
}): React.ReactElement => (
  <MsalProvider instance={msal}>
    <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
  </MsalProvider>
);
