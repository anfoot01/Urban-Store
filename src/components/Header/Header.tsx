import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenuBar from './HeaderMenuBar';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__promo}>
        <Link to="/sales">
          <div className={styles.marquee}>
            <div className={styles.marquee__content} style={{ display: 'flex', gap: '20px' }}>
              {Array.from({ length: 50 }, (_, i) => (
                <span key={i}>sale up to %50</span>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.header__menu}>
        <HeaderMenuBar />
      </div>
    </header>
  );
};

export default Header;
