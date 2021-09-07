import React, { FunctionComponent, useState } from "react";
import styles from "./Navigation.module.scss";
import { navigation, NavItem } from "../../content/content";
import NavigationItem from "./NavigationItem";
import { useMediaQuery, useTheme } from "@material-ui/core";
import NavigationDrawer from "./NavigationDrawer";



const Navigation: FunctionComponent = () => {
  const [activeId, setActiveID] = useState<number>(1);
  const onClickHandler = (id:number) => {
      setActiveID(id)
  };
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('xs'));
  return (

    <nav className={styles.navigation}>
        { isMatch ? <NavigationDrawer/> :
      <div className={styles.container}>
        {navigation.map((item: NavItem) => (
          <NavigationItem key={item.id} item={item} onClick={onClickHandler}
                          active={activeId === item.id} />
        ))}
      </div>}
    </nav>
  );
};

export default Navigation;
