import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

import { useDrawer } from "./hooks/useDrawer";

function App() {
  const { isOpenDrawer, handleDrawer } = useDrawer();
  return (
    <main>
      <Header onOpenCart={handleDrawer} />
      <Drawer isOpen={isOpenDrawer} onClose={handleDrawer} />
    </main>
  );
}

export default App;
