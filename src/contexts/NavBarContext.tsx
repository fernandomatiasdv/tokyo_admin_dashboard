import { createContext, FC, useState } from "react";
import { NavBarProviderProps, openDrawerInterface } from "../typed/interfaces";

const NavBarContextDefaultValue: openDrawerInterface = {
    open: true,
    openAlert: false,
    openCreateUserModal: false,
    activeLinkNavbar: 1,
    setOpen: () => false,
    setOpenAlert: () => false,
    setOpenCreateUserModal: () => false,
    setActiveLinkNavbar: () => 1
}

const NavBarContext = createContext<openDrawerInterface>(NavBarContextDefaultValue);

const NavBarProvider: FC<NavBarProviderProps> = (props) => {
  const {children} = props;  
  const [open, setOpen] = useState<boolean>(true);
  const [openAlert, setOpenAlert] = useState<boolean>(true);
  const [openCreateUserModal, setOpenCreateUserModal] = useState<boolean>(false);
  const [activeLinkNavbar, setActiveLinkNavbar] = useState<number>(1);


  const data = { 
    open, 
    setOpen, 
    openAlert, 
    setOpenAlert, 
    openCreateUserModal, 
    setOpenCreateUserModal, 
    activeLinkNavbar, 
    setActiveLinkNavbar 
  };
  
  return (
    <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
  );
};
export { NavBarProvider };
export default NavBarContext;
