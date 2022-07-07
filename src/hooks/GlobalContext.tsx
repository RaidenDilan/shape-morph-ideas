import React, { createContext, ReactNode, useContext, useState } from 'react';

interface GlobalContextInterface {
  isLoading: boolean;
}

export const defaultValues: GlobalContextInterface = {
  isLoading: false,
};

export const GlobalCtx = createContext<GlobalContextInterface>(defaultValues);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <GlobalCtx.Provider value={{ isLoading }}>{children}</GlobalCtx.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalCtx);
