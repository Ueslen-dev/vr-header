import { useContext } from "react";

import { DrawerContext } from "../context/DrawerContext";

export function useDrawer() {
  const { handleDrawer, isOpenDrawer } = useContext(DrawerContext);

  return {
    handleDrawer,
    isOpenDrawer,
  };
}
