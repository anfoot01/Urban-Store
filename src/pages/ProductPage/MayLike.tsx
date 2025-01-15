import React, { useState, useRef, useEffect } from 'react';
import styles from './MayLike.module.scss';
import productsData from '../../FakeApi/Products.json';

const ITEM_WIDTH = 336;
const VISIBLE_ITEMS = 4;

const MayLike = () => {
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_ITEMS);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isTransitioning = useRef(false);

  const extendedProducts = [
    ...productsData.slice(-VISIBLE_ITEMS),
    ...productsData,
    ...productsData.slice(0, VISIBLE_ITEMS),
  ];

  const handlePrev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (contentRef.current) {
      const offset = -(currentIndex * ITEM_WIDTH);
      contentRef.current.style.transition = isTransitioning.current
        ? 'transform 0.3s ease-in-out'
        : 'none';
      contentRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning.current) return;

    const timeout = setTimeout(() => {
      isTransitioning.current = false;

      if (currentIndex === 0) {
        setCurrentIndex(productsData.length);
      } else if (currentIndex === productsData.length + VISIBLE_ITEMS) {
        setCurrentIndex(VISIBLE_ITEMS);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className={styles.mayLike__carousel}>
      <div className={styles.mayLike__header}>
        <h3 className={styles.mayLike__header__title}>YOU MAY ALSO LIKE</h3>
        <div className={styles.mayLike__header__btnGroup}>
          <button
            onClick={handlePrev}
            className={styles.mayLike__header__btnGroup__btn}

          >
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="58" height="58" rx="12" fill="#ECECEC" />
              <path d="M43 28C43.5523 28 44 28.4477 44 29C44 29.5523 43.5523 30 43 30V28ZM14.2929 29.7071C13.9024 29.3166 13.9024 28.6834 14.2929 28.2929L20.6569 21.9289C21.0474 21.5384 21.6805 21.5384 22.0711 21.9289C22.4616 22.3195 22.4616 22.9526 22.0711 23.3431L16.4142 29L22.0711 34.6569C22.4616 35.0474 22.4616 35.6805 22.0711 36.0711C21.6805 36.4616 21.0474 36.4616 20.6569 36.0711L14.2929 29.7071ZM43 30H15V28H43V30Z" fill="#171717" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={styles.mayLike__header__btnGroup__btn}
          >
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="58" height="58" rx="12" fill="#ECECEC" />
              <path d="M15 28C14.4477 28 14 28.4477 14 29C14 29.5523 14.4477 30 15 30V28ZM43.7071 29.7071C44.0976 29.3166 44.0976 28.6834 43.7071 28.2929L37.3431 21.9289C36.9526 21.5384 36.3195 21.5384 35.9289 21.9289C35.5384 22.3195 35.5384 22.9526 35.9289 23.3431L41.5858 29L35.9289 34.6569C35.5384 35.0474 35.5384 35.6805 35.9289 36.0711C36.3195 36.4616 36.9526 36.4616 37.3431 36.0711L43.7071 29.7071ZM15 30H43V28H15V30Z" fill="#171717" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.mayLike__contentWrapper}>
        <div ref={contentRef} className={styles.mayLike__content}>
          {extendedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className={styles.mayLike__block}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.mayLike__block__image}
              />
              <h3 className={styles.mayLike__block__name}>{product.name}</h3>
              <p className={styles.mayLike__block__type}>{product.type}</p>
              <p className={styles.mayLike__block__store}>{product.store}</p>
              <div className={styles.mayLike__block__footer}>
                <p className={styles.mayLike__block__footer__price}>
                  {product.price}
                </p>
                <div className={styles.mayLike__block__footer__btnGroup}>
                  <button
                    className={styles.mayLike__block__footer__favorite}
                  >
                    <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_3463_15905" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8142 2.18593C23.8996 -0.728647 19.1742 -0.728642 16.2596 2.18594L14.491 3.95452L12.7405 2.20404C9.82597 -0.710536 5.10051 -0.710537 2.18593 2.20404C-0.728647 5.11862 -0.728642 9.84408 2.18594 12.7587L13.0854 23.6582C13.8665 24.4392 15.1328 24.4392 15.9139 23.6582L25.0543 14.5178L25.0456 14.5091L26.8142 12.7405C29.7288 9.82597 29.7288 5.10051 26.8142 2.18593Z" />
                      </mask>
                      <path d="M16.2596 2.18594L14.8454 0.771721V0.771722L16.2596 2.18594ZM26.8142 2.18593L28.2284 0.771717L28.2284 0.771716L26.8142 2.18593ZM14.491 3.95452L13.0768 5.36873L14.491 6.78295L15.9052 5.36873L14.491 3.95452ZM12.7405 2.20404L11.3263 3.61825L12.7405 2.20404ZM2.18593 2.20404L0.771716 0.789827L0.771716 0.789827L2.18593 2.20404ZM2.18594 12.7587L3.60015 11.3444L2.18594 12.7587ZM13.0854 23.6582L11.6712 25.0724L11.6712 25.0724L13.0854 23.6582ZM15.9139 23.6582L14.4996 22.2439H14.4996L15.9139 23.6582ZM25.0543 14.5178L26.4685 15.932L27.8827 14.5178L26.4685 13.1035L25.0543 14.5178ZM25.0456 14.5091L23.6314 13.0949L22.2172 14.5091L23.6314 15.9233L25.0456 14.5091ZM26.8142 12.7405L28.2284 14.1548V14.1548L26.8142 12.7405ZM17.6738 3.60015C19.8074 1.46662 23.2665 1.46662 25.4 3.60014L28.2284 0.771716C24.5328 -2.92391 18.541 -2.9239 14.8454 0.771721L17.6738 3.60015ZM15.9052 5.36873L17.6738 3.60015L14.8454 0.771722L13.0768 2.5403L15.9052 5.36873ZM11.3263 3.61825L13.0768 5.36873L15.9052 2.5403L14.1548 0.789827L11.3263 3.61825ZM3.60014 3.61825C5.73367 1.48473 9.1928 1.48473 11.3263 3.61825L14.1548 0.789827C10.4591 -2.9058 4.46734 -2.9058 0.771716 0.789827L3.60014 3.61825ZM3.60015 11.3444C1.46662 9.21092 1.46662 5.75178 3.60014 3.61825L0.771716 0.789827C-2.92391 4.48545 -2.9239 10.4773 0.771722 14.1729L3.60015 11.3444ZM14.4996 22.2439L3.60015 11.3444L0.771722 14.1729L11.6712 25.0724L14.4996 22.2439ZM14.4996 22.2439V22.2439L11.6712 25.0724C13.2333 26.6345 15.766 26.6345 17.3281 25.0724L14.4996 22.2439ZM23.64 13.1035L14.4996 22.2439L17.3281 25.0724L26.4685 15.932L23.64 13.1035ZM23.6314 15.9233L23.64 15.932L26.4685 13.1035L26.4599 13.0949L23.6314 15.9233ZM25.4 11.3263L23.6314 13.0949L26.4599 15.9233L28.2284 14.1548L25.4 11.3263ZM25.4 3.60014C27.5335 5.73367 27.5335 9.1928 25.4 11.3263L28.2284 14.1548C31.9241 10.4591 31.9241 4.46734 28.2284 0.771717L25.4 3.60014Z" fill="#171717" mask="url(#path-1-inside-1_3463_15905)" />
                    </svg>
                  </button>
                  <button
                    className={styles.mayLike__block__footer__addToCart}
                  >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8008 10.7C10.8008 6.44741 14.2482 3 18.5008 3C22.7534 3 26.2008 6.44741 26.2008 10.7V14.303C26.2008 14.4302 26.0977 14.5333 25.9705 14.5333H11.0311C10.9039 14.5333 10.8008 14.4302 10.8008 14.303V10.7Z" stroke="#171717" stroke-width="2" />
                      <path d="M5.59141 16.3968C5.43362 15.7657 5.91098 15.1543 6.56155 15.1543H30.4384C31.089 15.1543 31.5664 15.7657 31.4086 16.3968L29.0832 25.6982C28.3042 28.8144 25.5043 31.0005 22.2922 31.0005H14.7078C11.4957 31.0005 8.69579 28.8144 7.91675 25.6982L5.59141 16.3968Z" stroke="#171717" stroke-width="2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MayLike;
