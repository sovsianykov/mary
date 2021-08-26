import React, {FunctionComponent, ReactElement} from 'react';
import styles from "./Layout.module.scss"

interface LayoutProps {
    children: ReactElement
}

const Layout:FunctionComponent<LayoutProps> = ({children}) => {
    return (
        <main className={styles.layout}>
            {children}
        </main>
    );
};

export default Layout;