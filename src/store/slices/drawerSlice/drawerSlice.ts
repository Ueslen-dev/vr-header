import { StateCreator } from "zustand";

export interface DrawerSliceProps {
  isOpenDrawer: boolean;
  setIsOpenDrawer: (loading: boolean) => void;
}

export const drawerSlice: StateCreator<DrawerSliceProps> = (set) => ({
  isOpenDrawer: false,
  setIsOpenDrawer: (isOpenDrawer: boolean) =>
    set((prevState) => ({ ...prevState, isOpenDrawer })),
});
