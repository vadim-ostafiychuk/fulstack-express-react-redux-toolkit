import React from "react";
import { Layout as AntLayout } from "antd";
import Header from "../header";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%", color: "white" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};

export default Layout;
