import { BasicRoutePath } from "@/constants";
import { HeaderVariant } from "@/components/header/types";

// TODO: until approvals is the only one page with specific header will keep logic inside header
export const getHeaderVariant = (pathname: string): HeaderVariant => {
  if (pathname.startsWith(BasicRoutePath.Approvals)) {
    return HeaderVariant.Grey;
  }
  return HeaderVariant.Transparent;
};
