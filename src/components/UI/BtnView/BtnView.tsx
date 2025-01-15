import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnView.module.scss";

interface LinkButtonProps {
  to: string;
}

export const BtnView: React.FC<LinkButtonProps> = ({ to }) => {
  return (
    <Link to={to} className={styles.btnView}>
      View
    </Link>
  );
};