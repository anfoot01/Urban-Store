import React from 'react';
import styles from './Modal.module.scss';

const StarIcon: React.FC<{ filled: boolean; size?: number }> = ({ filled, size = 24 }) => (
  <svg
  width="24"
  height="22"
  viewBox="0 0 24 22"
  fill={filled ? '#FF8544' : 'white'}
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 1.23607L13.9676 7.2918C14.2354 8.11584 15.0033 8.67376 15.8697 8.67376H22.2371L17.0858 12.4164C16.3848 12.9257 16.0915 13.8284 16.3593 14.6525L18.3269 20.7082L13.1756 16.9656C12.4746 16.4563 11.5254 16.4563 10.8244 16.9656L5.67312 20.7082L7.64074 14.6525C7.90849 13.8284 7.61518 12.9257 6.9142 12.4164L1.76289 8.67376L8.13026 8.67376C8.99671 8.67376 9.76463 8.11584 10.0324 7.29179L12 1.23607Z"
    stroke="#FF8544"
    stroke-width="2"
  />
</svg>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className={styles.reviews__block__stars} style={{ display: 'flex', gap: '4px' }}>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon key={index} filled={index < rating} />
      ))}
    </div>
  );
};

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ModalProps {
  reviews: Review[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ reviews, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3L28.4558 28.4558" stroke="#171717" stroke-width="2" stroke-linecap="round" />
  <path d="M28.457 3L3.00119 28.4558" stroke="#171717" stroke-width="2" stroke-linecap="round" />
</svg>
        </button>
        
        <div className={styles.reviewGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviews__block}>
            <h4 className={styles.reviews__block__name}>{review.name}</h4>
            <div className={styles.reviews__block__rating}>
              <StarRating rating={review.rating} />
              <p>{review.rating.toFixed(1)}</p>
            </div>
            <p className={styles.reviews__block__comment}>{review.comment}</p>
            <p>
              <em className={styles.reviews__block__date}>
                {new Date(review.date).toLocaleDateString()}
              </em>
            </p>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
