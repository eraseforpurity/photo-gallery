import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: IButton) => {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      {children}
    </button>
  );
};
