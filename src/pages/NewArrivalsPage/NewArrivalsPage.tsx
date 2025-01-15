import React from "react";
import BreadCrumbles from "../../components/BreadCrumbles/BreadCrumb";
import { NewArrivalsPageContainer } from "./NewArrivalsPageContainer";
import { BtnFilter } from "../../components/UI/BtnFilter/BtnFilter";
import styles from "./NewArrivalsPage.module.scss";

export const NewArrivalsPage: React.FC = () => {
    return (
        <div className={styles.newArrivals}>
            <div><BreadCrumbles /></div>
            <div className={styles.newArrivals__title}>
                <div><h2>New Arrivals</h2></div>
                <div><BtnFilter /></div>
            </div>
            <NewArrivalsPageContainer />
        </div>
    );
};
