import { create } from "zustand";

import { drawerSlice, DrawerSliceProps } from "./slices/drawerSlice";

type drawerStoreProps = DrawerSliceProps;

export const drawerStore = create<drawerStoreProps>((...a) => ({
  ...drawerSlice(...a),
}));
