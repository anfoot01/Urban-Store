import { Link } from 'react-router-dom';
import styles from './MainCategories.module.scss';
import '../../../scss/main.scss';
import Layout from '../Layout/Layout';
import { FC } from 'react';
const MainCategories: FC = () => {
  return (
    <Layout>
      <div className={styles.popularCategories} id="categories">
        <h2>Categories</h2>
        <div className={styles.container__popular}>
          <div className={styles.popularBlock1}>
            <Link to="#" className={styles.link}>
              <div className={styles.popularBlock__1}>Clothes</div>
            </Link>
          </div>
          <div className={styles.popularBlock2}>
            <div>
              <Link to="#" className={styles.link}>
                <div className={styles.popularBlock__21}>Manga / Books</div>
              </Link>
            </div>
            <div className={styles.popularBlock__2}>
              <div className={styles.popularBlock22}>
                <Link to="#" className={styles.link}>
                  <div className={styles.popularBlock__22}>Anime</div>
                </Link>
              </div>
              <div className={styles.popularBlock23}>
                <Link to="#" className={styles.link_dark}>
                  <div className={styles.popularBlock__23}>Accessories</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.popularBottom}>
          <div className={styles.popularBottom2}>
            <div className={styles.popularBlock22}>
              <Link to="#" className={styles.link_dark}>
                <div className={styles.popularBlock__222}>Spices</div>
              </Link>
            </div>

            <div className={styles.popularBlock23}>
              <Link to="#" className={styles.link_dark}>
                <div className={styles.popularBlock__233}>Health & Beauty</div>
              </Link>
            </div>
          </div>
          <div>
            <Link to="#" className={styles.link}>
              <div className={styles.popularBlock__234}>Others</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainCategories;
