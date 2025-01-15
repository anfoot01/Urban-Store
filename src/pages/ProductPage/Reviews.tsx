import React, { useState } from 'react';
import reviews from '../../FakeApi/Reviews.json';
import Modal from './Modal';
import styles from './Reviews.module.scss';

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

export const averageRating = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialReviews: Review[] = reviews.slice(0, 4);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);



  return (
    <section className={styles.reviews}>
      <div className={styles.reviews__header}>
        <div className={styles.reviews__header__leftSide}>
          <h3 className={styles.reviews__header__title}>Reviews</h3>
          <div className={styles.reviews__header__averageRating}>
            {averageRating}
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0489 1.42705C11.3483 0.505739 12.6517 0.50574 12.9511 1.42705L14.9187 7.48278C15.0526 7.8948 15.4365 8.17376 15.8697 8.17376H22.2371C23.2058 8.17376 23.6086 9.41338 22.8249 9.98278L17.6736 13.7254C17.3231 13.9801 17.1764 14.4314 17.3103 14.8435L19.2779 20.8992C19.5773 21.8205 18.5228 22.5866 17.7391 22.0172L12.5878 18.2746C12.2373 18.0199 11.7627 18.0199 11.4122 18.2746L6.2609 22.0172C5.47719 22.5866 4.42271 21.8205 4.72206 20.8992L6.68969 14.8435C6.82356 14.4314 6.6769 13.9801 6.32642 13.7254L1.17511 9.98278C0.391392 9.41338 0.794168 8.17376 1.76289 8.17376H8.13026C8.56349 8.17376 8.94744 7.8948 9.08132 7.48278L11.0489 1.42705Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className={styles.reviews__header__quantity}>{reviews.length} reviews</div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '20px',
        }}
      >
        {initialReviews.map((review) => (
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
      <div className={styles.reviews__viewAll}>
      <button className={styles.reviews__viewAll__btn} onClick={openModal} >
        View
      </button>
      </div>
      
      {isModalOpen && <Modal reviews={reviews} onClose={closeModal} />}
    </section>
  );
};

export default Reviews;
