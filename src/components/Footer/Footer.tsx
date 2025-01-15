import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../../public/assets/images/logo-light.webp';
import instagram from '../../../public/assets/svg/instagram.svg';
import twitter from '../../../public/assets/svg/twitter.svg';
import facebook from '../../../public/assets/svg/facebook.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__cont}>
        <div className={styles.footer__col}>
          <h3 className={styles.footer__col__title}>Customer Service</h3>
          <div className={styles.footer__col__links}>
            <Link to="/contacts" className={styles.footer__col__link}>Contact Us</Link>
            <Link to="/shipping&returns" className={styles.footer__col__link}>Shipping & Returns</Link>
            <Link to="/faq" className={styles.footer__col__link}>FAQ</Link>
          </div>
        </div>

        <div className={styles.footer__col}>
          <h3 className={styles.footer__col__title}>About URBAN ZEN</h3>
          <div className={styles.footer__col__links}>
            <Link to="/about-us" className={styles.footer__col__link}>About Us</Link>
            <Link to="/privacy-policy" className={styles.footer__col__link}>Privacy Policy</Link>
            <Link to="/terms-of-service" className={styles.footer__col__link}>Terms of Service</Link>
          </div>
        </div>

        <div className={styles.footer__col}>
          <h3 className={styles.footer__col__title}>We Are Social</h3>
          <div className={styles.footer__col__linksSocial}>
            <Link to="#" className={styles.footer__col__link}>
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link to="#" className={styles.footer__col__link}>
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link to="#" className={styles.footer__col__link}>
              <img src={facebook} alt="Facebook" />
            </Link>
          </div>
        </div>

        <div className={styles.footer__col}>
          <div className={styles.footer__col__logo}>
            <Link to="/">
              <img src={logo} alt="logo-light" />
            </Link>
          </div>
          <p className={styles.footer__col__cp}>Copyright © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
