import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BreadCrumb.module.scss';
import houseSvg from '../../../public/assets/svg/house.svg';

const BreadCrumbles: React.FC = () => {
  const location = useLocation();

  const pathnames: string[] = location.pathname.split('/').filter((x) => x);

  return (
    <section className={styles.breadcrumb}>
      <ul className={styles.breadcrumb__ul}>
        <li>
          <Link to="/">
            <img src={houseSvg} alt="home" />
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <span>
                <svg
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00024 4L10.4855 12.4853"
                    stroke="#202020"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.00024 21L10.4855 12.5147"
                    stroke="#202020"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <li>
                {isLast ? <span>{value}</span> : <Link to={to}>{value}</Link>}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default BreadCrumbles;
