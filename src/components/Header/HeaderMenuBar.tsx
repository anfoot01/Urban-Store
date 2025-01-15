import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import SearchPanel from './SearchPanel';
import SearchPanelInput from './SearchPanelInput';
import HeartIcon from '../Icon/HeartIcon';
import ProfileIcon from '../Icon/ProfileIcon';
import CartIcon from '../Icon/CartIcon';
import ArrowDownMenuIcon from '../Icon/ArrowDownMenuIcon';
import { HeaderCatalog } from './HeaderCatalog';

const HeaderMenuBar: React.FC = () => {
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const handleSearchClick = () => {
    setShowSearchPanel((prev) => !prev);
  };

  const handleCatalogClick = () => {
    setShowCatalog((prev) => !prev);  
  };

  return (
    <div className={styles.header__menuBar}>
      <div className={styles.container__menuBar}>
        <div className={styles.header__logo}>
          <Link to="/">
            <Logo variant="light" />
          </Link>
        </div>

        <div className={styles.header__menuNavbar}>
          {!showSearchPanel && (
            <>
              <nav className={styles.header__menuItems}>
                <ul className={styles.header__menuList}>
                  <li>
                    <Link to="#" className={styles.header__linkCatalog}>
                      Catalog 
                      <button className={styles.header__arrowBtn} onClick={handleCatalogClick}><ArrowDownMenuIcon /></button>
                    </Link>
                    {showCatalog && <HeaderCatalog onCloseCatalog={handleCatalogClick} />}
                  </li>
                  <li><Link to="/sales">Sale</Link></li>
                  <li><Link to="/product">About us</Link></li>
                  <li><Link to="/contacts">Contacts | space </Link></li>
                </ul>
              </nav>
              <nav className={styles.header__menuItems}>
                <ul className={styles.header__menuIcons}>
                  <li><button onClick={handleSearchClick} className={styles.header__search}><SearchPanel /></button></li>
                  <li><Link to="/favourites"><HeartIcon /></Link></li>
                  <li><Link to="/profile"><ProfileIcon /></Link></li>
                  <li><Link to="/cart"><CartIcon /></Link></li>
                </ul>
              </nav>
            </>
          )}
          {showSearchPanel && <SearchPanelInput />}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuBar;
