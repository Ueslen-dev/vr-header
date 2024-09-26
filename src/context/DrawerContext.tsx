"use client";
import { createContext, ReactNode, useState } from "react";

interface DrawerContextType {
  handleDrawer: () => void;
  isOpenDrawer: boolean;
}

export const DrawerContext = createContext({} as DrawerContextType);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const handleDrawer = () => setIsOpenDrawer(!isOpenDrawer);

  const state = {
    handleDrawer,
    isOpenDrawer,
  };

  return (
    <DrawerContext.Provider value={state}>{children}</DrawerContext.Provider>
  );
}
