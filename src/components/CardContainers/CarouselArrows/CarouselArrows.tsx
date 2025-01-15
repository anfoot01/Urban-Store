import React from "react";
import styles from './CarouselArrows.module.scss';

interface CarouselArrowsProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
}

export const CarouselArrows: React.FC<CarouselArrowsProps> = ({ onNext, onPrev }) => {
    return (
        <div className={styles.navigation}>
            <button onClick={onPrev} className={styles.arrowCarousel}>
                <img src='../../assets/images/arrow-carousel1.png' alt="arrow1" />
            </button>
            <button onClick={onNext} className={styles.arrowCarousel}>
                <img src='../../assets/images/arrow-carousel2.png' alt="arrow2" />
            </button>
        </div>
    );
};