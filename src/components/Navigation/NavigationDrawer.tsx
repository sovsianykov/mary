import React, {FunctionComponent, useCallback, useState} from "react";
import {Button, Drawer} from "@material-ui/core";
import {navigation, NavItem} from "../../constants/constants";
import NavigationItem from "./NavigationItem";
import styles from "./Navigation.module.scss";



const NavigationDrawer: FunctionComponent = () => {
   const [open , setOpen] = useState<boolean>(false);
    const [activeId, setActiveID] = useState<number>(1);


   const onClickHandler = useCallback((id) => {
       setOpen(!open)
       setActiveID(id)
   },[open])




  return (<nav className={styles.navigation}>
      <div className={styles.container}>
      <Button onClick={onClickHandler} style={{color : "#fff",letterSpacing:"0.1rem" }} >Menu</Button>
       <Drawer open={open} anchor={"top"} onClose={() =>setOpen(false)}
               className={styles.container_drawer}
       >

               {navigation.map((item: NavItem) => (
                   <NavigationItem key={item.id} item={item} onClick={onClickHandler}
                                   active={activeId === item.id}
                   />
               ))}

       </Drawer>
  </div>
       </nav>);
};

export default NavigationDrawer;
