import { createContext, useState } from "react";

export const MenuContext = createContext({
   active: false,
   setActive: () => {},
   closeMenu: () => {},
   openMenu: () => {},
});

export default function MenuProvider({ children }) {
   const [active, setActive] = useState(false);

   const openMenu = () => setActive(true);
   const closeMenu = () => setActive(false);

   return (
      <MenuContext.Provider
         value={{
            active,
            setActive,
            closeMenu,
            openMenu,
         }}>
         {children}
      </MenuContext.Provider>
   );
}
