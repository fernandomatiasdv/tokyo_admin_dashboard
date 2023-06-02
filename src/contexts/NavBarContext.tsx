import { createContext, FC, useState } from "react";
import { NavBarProviderProps, openDrawerInterface } from "../typed/interfaces";

const NavBarContextDefaultValue: openDrawerInterface = {
    open: true,
    openAlert: false,
    setOpen: () => false,
    setOpenAlert: () => false,
}

const NavBarContext = createContext<openDrawerInterface>(NavBarContextDefaultValue);

const NavBarProvider: FC<NavBarProviderProps> = (props) => {
  const {children} = props;  
  const [open, setOpen] = useState<boolean>(true);
  const [openAlert, setOpenAlert] = useState<boolean>(true);

  const data = { open, setOpen, openAlert, setOpenAlert };
  return (
    <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
  );
};
export { NavBarProvider };
export default NavBarContext;
