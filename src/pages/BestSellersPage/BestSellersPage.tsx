import React from "react";
import BreadCrumbles from "../../components/BreadCrumbles/BreadCrumb";
import { BestSellersPageContainer } from "./BestSellersPageContainer";
import { BtnFilter } from "../../components/UI/BtnFilter/BtnFilter";
import styles from "./BestSellersPage.module.scss";

export const BestSellersPage: React.FC = () => {
    return (
        <div className={styles.bestSellers}>
            <div><BreadCrumbles /></div>
            <div className={styles.bestSellers__title}>
                <div><h2>Best Sellers</h2></div>
                <div><BtnFilter /></div>
            </div>
            <BestSellersPageContainer />
        </div>
    );
};
