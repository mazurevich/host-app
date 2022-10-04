import React, { useEffect, useRef, useState } from "react";
import { mountRootParcel, Parcel, ParcelConfig } from "single-spa";
import { loadScript, loadComponent } from "../utils";
import { FederatedModuleProps } from "./types";
import { Loader } from "@/components";

export const FederatedModule = React.memo(
  ({
    url,
    scope,
    module,
    loadingFallback = <Loader />,
    errorFallback,
    className,
    ...moduleCustomProps
  }: FederatedModuleProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [component, setComponent] = useState<ParcelConfig | null>(null);
    const [error, setError] = useState<string>("");
    const renderRef = useRef<HTMLDivElement>(null);
    const parcelRef = useRef<Parcel | null>(null);

    useEffect(() => {
      loadScript(url)
        .then(() => {
          return loadComponent(scope, module)();
        })
        .then((component) => {
          setComponent(component as ParcelConfig);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });

      return () => {
        if (parcelRef.current) {
          parcelRef.current.unmount();
          parcelRef.current = null;
          setIsLoading(true);
        }
      };
    }, [module, scope, url]);

    useEffect(() => {
      console.log(moduleCustomProps);
      if (!isLoading && !error && component && renderRef.current) {
        if (parcelRef.current?.update) {

          parcelRef.current.update({ ...moduleCustomProps });
        } else {
          parcelRef.current = mountRootParcel(component, {
            ...moduleCustomProps,
            domElement: renderRef.current,
          });
        }
      }
    }, [error, component, moduleCustomProps, isLoading]);

    const renderContent = () => {
      if (error) {
        return errorFallback || "Error on loading module";
      }
      if (isLoading) {
        return loadingFallback || "Loading module";
      }
    };

    return (
      <div ref={renderRef} className={className}>
        {renderContent()}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.moduleLoadingFunc === nextProps.moduleLoadingFunc &&
      prevProps.loadingFallback === nextProps.loadingFallback &&
      prevProps.className === nextProps.className
    );
  }
);
