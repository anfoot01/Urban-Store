import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CardProduct.module.scss";
import { CardProductProps } from "../../types/products";
import HeartIcon from "../Icon/HeartIcon";
import CartIcon from "../Icon/CartIcon";

export const CardProductSale: React.FC<CardProductProps> = ({ img, title, shop, priceCurrent, priceOld }) => {
    const [isHeartActive, setHeartActive] = useState(false);
    const [isCartActive, setCartActive] = useState(false);

    return (
        <div className={styles.cardProduct}>
            <Link to="/">
                <div className={styles.cardProduct__img}>
                    <img src={img} alt={title} />
                </div>
            </Link>
            <Link to="/">
                <p className={styles.cardProduct__title}>{title}</p>
            </Link>
            <p className={styles.cardProduct__shop}>{shop}</p>
            <div className={styles.cardProduct__panelBtn}>
                <div className={styles.cardProduct__priceChange}>
                    <div className={styles.cardProduct__price}>{priceCurrent}$</div>
                    <div className={styles.cardProduct__oldprice}>{priceOld}$</div>
                </div>
                <div>
                    <button
                        className={`${styles.cardProduct__btn} ${isHeartActive ? styles.active : ""}`}
                        onClick={() => setHeartActive((prev) => !prev)}
                    >
                        <HeartIcon />
                    </button>
                    <button
                        className={`${styles.cardProduct__btn} ${isCartActive ? styles.active : ""}`}
                        onClick={() => setCartActive((prev) => !prev)}
                    >
                        <CartIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
