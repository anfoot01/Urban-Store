import { Link } from 'react-router-dom';
import '../../../scss/main.scss';
import styles from './PopularCategories.module.scss';
import Layout from '../Layout/Layout';
import { FC } from 'react';

const PopularCategories: FC = () => {
    return (
        <Layout>
            <div className={styles.popularCategories}>
                <h2>Popular Categories</h2>
                <div className={styles.container__popular}>
                    <div className={styles.popularBlock1}>
                        <Link to="/" className={styles.link}>
                            <div className={styles.popularBlock__1}>
                                Clothes
                            </div>
                        </Link>
                    </div>
                    <div className={styles.popularBlock2}>
                        <div>
                            <Link to="/" className={styles.link}>
                                <div className={styles.popularBlock__21}>
                                    Anime
                                </div>
                            </Link>
                        </div>
                        <div className={styles.popularBlock__2}>
                            <div className={styles.popularBlock22}>
                                <Link to="/" className={styles.link_dark}>
                                    <div className={styles.popularBlock__22}>
                                        Accessories
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.popularBlock23}>
                                <Link to="/" className={styles.link_dark}>
                                    <div className={styles.popularBlock__23}>
                                        Health & Beauty
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PopularCategories;

/* 
<Layout>
            <div className={styles.popularCategories}>
                <h2>Popular Categories</h2>
                <div className={styles.container__popular}>
                    <Link to="/evangelion-store" className={styles.link}>
                        <div className={styles.popularBlock__1}>
                            Shop Evangelion Store
                        </div>
                    </Link>
                    <div className={styles.popularBlock__2}>
                        <Link to="/home-entertainment" className={styles.link}>
                            <div className={styles.popularBlock__21}>
                                    Shop Home Entertainment
                            </div>
                        </Link>
                        <Link to="/anime-bedding" className={styles.link}>
                            <div className={styles.popularBlock__22}>
                                Anime Bedding
                            </div>
                        </Link>
                        <Link to="/limited" className={styles.link}>
                            <div className={styles.popularBlock__23}>
                                Limited
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>*/