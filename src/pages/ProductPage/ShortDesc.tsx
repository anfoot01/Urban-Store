import { useState } from 'react';
import styles from './ShortDesc.module.scss';
import fav from '../../../public/assets/svg/fav.svg';
import line from '../../../public/assets/svg/line-discount.svg';
import reviews from '../../FakeApi/Reviews.json';
const ProductPageShortDesc = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const averageRating = reviews.length
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1.0)
    : 'No Reviews';

  return (
    <section className={styles.shortDesc}>
      <div className={styles.shortDesc__NameRating}>
      <button className={styles.shortDesc__shopName}>Albus Anime Shop</button>
      <div className={styles.shortDesc__averageRatingBlock}>
        <div className={styles.shortDesc__averageRating}>{averageRating}</div>
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
      <h3 className={styles.shortDesc__productName}>
        Brand
        <br />
        Crunchyroll x Logic x Cowboy Bebop - See You Space Cowboy T-shirt - Crunchyroll Exclusive
      </h3>

      <p className={styles.shortDesc__code}>Code: 367504902</p>

      <div className={styles.shortDesc__price}>
        <h2 className={styles.shortDesc__price__final}>20$</h2>
        <div className={styles.shortDesc__price__discount}>
          <h3 className={styles.shortDesc__price__discount__price}> 50$</h3>
          <div className={styles.shortDesc__price__discount__line}>
            <img src={line} alt="" />
          </div>
        </div>
      </div>

      <h5 className={styles.shortDesc__subTitle}>Color</h5>
      <div className={styles.shortDesc__color}>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
        <button className={styles.shortDesc__color__button}></button>
      </div>

      <h5 className={styles.shortDesc__subTitle}>Size</h5>
      <div className={styles.shortDesc__size}>
        <button className={styles.shortDesc__size__button}>XS</button>
        <button className={styles.shortDesc__size__button}>S</button>
        <button className={styles.shortDesc__size__button}>M</button>
        <button className={styles.shortDesc__size__button}>L</button>
        <button className={styles.shortDesc__size__button}>XL</button>
        <button className={styles.shortDesc__size__button}>2XL</button>
      </div>

      <div className={styles.shortDesc__quantity}>
        <h5 className={styles.shortDesc__subTitle}>Quantity:</h5>
        <div className={styles.shortDesc__quantity__block}>
          <button onClick={increment} className={styles.shortDesc__quantity__block__changing}>
            +
          </button>
          <div className={styles.shortDesc__quantity__block__count}>{count}</div>
          <button onClick={decrement} className={styles.shortDesc__quantity__block__changing}>
            -
          </button>
        </div>
      </div>

      <div className={styles.shortDesc__warning}>Select Size, Color and Quantity</div>

      <div className={styles.shortDesc__btnGroup}>
        <button className={styles.shortDesc__btnGroup__addToCart}>Add to cart</button>
        <button className={styles.shortDesc__btnGroup__addToFav}>
          <img src={fav} alt="" />
        </button>
      </div>
    </section>
  );
};

export default ProductPageShortDesc;
