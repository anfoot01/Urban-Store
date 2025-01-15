import React from "react";
import Layout from "../Layout/Layout";
import styles from './Header.module.scss';

const HeaderBanner: React.FC = () => {

    const scrollToSection = () => {
        const section = document.getElementById("categories");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.header__banner}>
            <Layout>
                <h1 className={styles.header__banner__title}>Discover the Essence of the East in One Marketplace</h1>
                <div onClick={scrollToSection}>
                    <div className={styles.header__banner__arrow1}>
                        <img src='../../assets/images/arrow1.png' alt="arrow1" />
                    </div>
                    <div className={styles.header__banner__arrow2}>
                        <img src='../../assets/images/arrow2.png' alt="arrow2" />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default HeaderBanner;
