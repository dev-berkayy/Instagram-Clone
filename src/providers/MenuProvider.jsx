import { createContext, useState } from "react";

export const MenuContext = createContext({
   active: false,
   state: "",
   setActive: () => { },
   closeMenu: () => { },
   openMenu: () => { },
});

export default function MenuProvider({ children }) {
   const [state, setState] = useState("");
   const [active, setActive] = useState(false);

   const openMenu = (name) => {
      setState(name)
      setActive(true)

   };
   const closeMenu = () => setActive(false);

   return (
      <MenuContext.Provider
         value={{
            active,
            state,
            setActive,
            closeMenu,
            openMenu,
         }}>
         {children}
      </MenuContext.Provider>
   );
}
