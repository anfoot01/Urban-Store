import styles from './BtnFilter.module.scss';

export const BtnFilter = () => {

    return (
        <>
            <button className={styles.btnFilter}>
                <span className={styles.btnFilter__text}>Filter</span>           
            </button>
        </>
    );
}