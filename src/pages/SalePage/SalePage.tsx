import React from "react";
import BreadCrumbles from "../../components/BreadCrumbles/BreadCrumb";
import { SalePageContainer } from "./SalePageContainer";
import { BtnFilter } from "../../components/UI/BtnFilter/BtnFilter";
import styles from "./SalePage.module.scss";

export const SalePage: React.FC = () => {
    return (
        <div className={styles.sales}>
            <div><BreadCrumbles /></div>
            <div className={styles.sales__title}>
                <div><h2>Sale</h2></div>
                <div><BtnFilter /></div>
            </div>
            <SalePageContainer />
        </div>
    );
};
