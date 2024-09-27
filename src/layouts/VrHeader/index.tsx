import { Header } from "../../components/Header";
import { Drawer } from "../../components/Drawer";

import { drawerStore } from "../../store";

const VrHeader = () => {
  const { isOpenDrawer, setIsOpenDrawer } = drawerStore();
  return (
    <main>
      <Header onOpenCart={() => setIsOpenDrawer(!isOpenDrawer)} />
      <Drawer isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
    </main>
  );
};

export default VrHeader;
