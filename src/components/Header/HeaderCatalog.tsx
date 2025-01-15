import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

interface HeaderCatalogProps {
    onCloseCatalog: () => void;
}

export const HeaderCatalog: React.FC<HeaderCatalogProps> = ({onCloseCatalog}) => {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    
    const toggleSubmenu = (menu: string) => {
        setOpenSubmenu(prevState => (prevState === menu ? null : menu));
    };

    return (
        <div className={styles.header__catalog}>
            <ul >
                <li className={styles.catalog__title}><Link to="/all-items" onClick={onCloseCatalog}>View all</Link></li>
                <li><Link to="/sales" onClick={onCloseCatalog} className={styles.catalog__sale}>Sale</Link></li>
                <li><Link to="/best-sellers" onClick={onCloseCatalog} className={styles.catalog__bestsellers}>Best sellers</Link></li>
                <li><Link to="/new-arrivals" onClick={onCloseCatalog}>New arrivals</Link></li>
                
                <li className={styles.hasSubmenu} onClick={() => toggleSubmenu("anime")}>
                    <Link to="/">
                        <div className={styles.catalog__dropdown}>
                            <div>Anime</div>
                            <div className={styles.catalog__arrow}><img src="../../../assets/images/catalog-arrow.png" alt="arrow" /></div>
                        </div>
                    </Link>
                    {openSubmenu === "anime" && (
                        <ul onClick={onCloseCatalog} className={styles.submenu}>
                            <li><Link to="/">View all</Link></li>
                            <li><Link to="/">Figures</Link></li>
                            <li><Link to="/">Pillows</Link></li>
                            <li><Link to="/">Cups</Link></li>
                            <li><Link to="/">Manga</Link></li>
                            <li><Link to="/">Novels</Link></li>
                            <li><Link to="/">Other</Link></li>
                        </ul>
                    )}
                </li>
                
                <li><Link to="/" onClick={onCloseCatalog}>Manga | Books</Link></li>
                
                <li className={styles.hasSubmenu} onClick={() => toggleSubmenu("clothes")}>
                    <Link to="/">
                        <div className={styles.catalog__dropdown}>
                            <div>Clothes</div>
                            <div className={styles.catalog__arrow}><img src="../../../assets/images/catalog-arrow.png" alt="arrow" /></div>
                        </div>
                    </Link>
                    {openSubmenu === "clothes" && (
                        <ul onClick={onCloseCatalog} className={styles.submenu}>
                            <li><Link to="/">View all</Link></li>
                            <li><Link to="/">Hoodies</Link></li>
                            <li><Link to="/">T-shirts</Link></li>
                            <li><Link to="/">Dresses</Link></li>
                            <li><Link to="/">Shoes</Link></li>
                            <li><Link to="/">Skirts</Link></li>
                            <li><Link to="/">Shorts</Link></li>
                            <li><Link to="/">Shirts</Link></li>
                            <li><Link to="/">Other</Link></li>
                        </ul>
                    )}
                </li>
                
                <li className={styles.hasSubmenu} onClick={() => toggleSubmenu("accessories")}>
                    <Link to="/">
                        <div className={styles.catalog__dropdown}>
                            <div>Accessories</div>
                            <div className={styles.catalog__arrow}><img src="../../../assets/images/catalog-arrow.png" alt="arrow" /></div>
                        </div>
                    </Link>
                    {openSubmenu === "accessories" && (
                        <ul onClick={onCloseCatalog} className={styles.submenu}>
                            <li><Link to="/">View all</Link></li>
                            <li><Link to="/">Home accessories</Link></li>
                            <li><Link to="/">Hair accessories</Link></li>
                            <li><Link to="/">Body accessories</Link></li>
                            <li><Link to="/">Jewelry</Link></li>
                            <li><Link to="/">Other</Link></li>
                        </ul>
                    )}
                </li>

                <li className={styles.hasSubmenu} onClick={() => toggleSubmenu("beauty")}>
                    <Link to="/">
                        <div className={styles.catalog__dropdown}>
                            <div>Beauty & Health</div>
                            <div className={styles.catalog__arrow}><img src="../../../assets/images/catalog-arrow.png" alt="arrow" /></div>
                        </div>
                    </Link>
                    {openSubmenu === "beauty" && (
                        <ul onClick={onCloseCatalog} className={styles.submenu}>
                            <li><Link to="/">View all</Link></li>
                            <li><Link to="/">Cosmetics</Link></li>
                            <li><Link to="/">Hair care</Link></li>
                            <li><Link to="/">Face care</Link></li>
                            <li><Link to="/">Body care</Link></li>
                            <li><Link to="/">Oils</Link></li>
                            <li><Link to="/">Parfums</Link></li>
                            <li><Link to="/">Vitamins</Link></li>
                            <li><Link to="/">Other</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/" onClick={onCloseCatalog}>Spices</Link></li>
                <li><Link to="/" onClick={onCloseCatalog}>Other</Link></li>
            </ul>
        </div>
    );
};
