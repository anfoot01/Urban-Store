import React, { useState } from 'react';
import styles from './FullDesc.module.scss';
import ClosedArrow from '../../../public/assets/svg/arrow-closed.tsx';
import OpenArrow from '../../../public/assets/svg/arrow-opened.tsx';

const PassSection: React.FC = () => {
  const [activePass, setActivePass] = useState<number | null>(null);

  const toggleDescription = (passId: number): void => {
    setActivePass(activePass === passId ? null : passId);
  };

  return (
    <section className={styles.passSection}>
      {/* Pass 1 */}
      <div
        className={`${styles.pass} ${activePass === 1 ? styles.active : ''}`}
        onClick={() => toggleDescription(1)}
        style={{ backgroundColor: '#7d3cf5' }}
      >
        <div className={styles.passHeader}>
          <h3 className={styles.passHeader__title}>Description</h3>
          <span className={styles.arrow}>{activePass === 1 ? <OpenArrow /> : <ClosedArrow />}</span>
        </div>

        {activePass === 1 && (
          <div className={styles.passContent}>
            <div className={styles.description}>
              <h3 className={styles.description__title}>Description</h3>
              <p className={styles.description__desc}>
                Step into the rhythm of the cosmos with this Crunchyroll Exclusive “Cowboy Bebop”
                collection, a symphony of style orchestrated in collaboration with the lyrical
                genius (and anime fan) Logic. Each piece is designed with the finest materials for
                effortless style and comfort, making it a versatile addition to any wardrobe.
              </p>
              <p className={styles.description__desc__mb40}>
                It’s the mashup we didn’t know we needed! Logic has officially joined the crew of
                the Bebop, illustrated by anime legend Toshihiro Kawamoto (character designer and
                animation director of “Cowboy Bebop”), no less. We know the crew digs jazz, but
                they’re definitely into whatever tunes Logic is spinning. This design isn’t just an
                Exclusive; it’s a piece of art. 
              </p>
              <h3 className={styles.description__title}>Features</h3>
              <p className={styles.description__desc}>Crunchyroll Exclusive</p>
              <p className={styles.description__desc}>Officially Licensed</p>
              <p className={styles.description__desc}>Materials: 100% Cottone</p>
              <p className={styles.description__desc}>Fabric Weight: Heavyweight (7.5 oz/yard²)</p>
              <p className={styles.description__desc}>Fit: Oversized</p>
            </div>
          </div>
        )}
      </div>
      {/* Pass 2 */}
      <div
        className={`${styles.pass} ${activePass === 2 ? styles.active : ''}`}
        onClick={() => toggleDescription(2)}
        style={{ backgroundColor: '#a578f7' }}
      >
        <div className={styles.passHeader}>
          <h3 className={styles.passHeader__title}>Size Guide</h3>
          <span className={styles.arrow}>{activePass === 2 ? <OpenArrow /> : <ClosedArrow />}</span>
        </div>

        {activePass === 2 && (
          <div className={styles.passContent}>
            <div className={styles.description}>
              <h3 className={styles.description__title}>Men's</h3>
              <div className={styles.description__block2}>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Size</p>
                  <p className={styles.description__row__short}>XS</p>
                  <p className={styles.description__row__short}>S</p>
                  <p className={styles.description__row__short}>M</p>
                  <p className={styles.description__row__short}>L</p>
                  <p className={styles.description__row__short}>XL</p>
                  <p className={styles.description__row__short}>2XL</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Bust (cm)</p>
                  <p className={styles.description__row__short}>80</p>
                  <p className={styles.description__row__short}>84</p>
                  <p className={styles.description__row__short}>88</p>
                  <p className={styles.description__row__short}>92</p>
                  <p className={styles.description__row__short}>96</p>
                  <p className={styles.description__row__short}>100</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Waist (cm)</p>
                  <p className={styles.description__row__short}>62</p>
                  <p className={styles.description__row__short}>66</p>
                  <p className={styles.description__row__short}>70</p>
                  <p className={styles.description__row__short}>74</p>
                  <p className={styles.description__row__short}>78</p>
                  <p className={styles.description__row__short}>82</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Hip (cm)</p>
                  <p className={styles.description__row__short}>86</p>
                  <p className={styles.description__row__short}>90</p>
                  <p className={styles.description__row__short}>94</p>
                  <p className={styles.description__row__short}>98</p>
                  <p className={styles.description__row__short}>102</p>
                  <p className={styles.description__row__short}>106</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Sleeve Leangh (cm)</p>
                  <p className={styles.description__row__short}>59/61</p>
                  <p className={styles.description__row__short}>59/61</p>
                  <p className={styles.description__row__short}>60/62</p>
                  <p className={styles.description__row__short}>60/62</p>
                  <p className={styles.description__row__short}>61/63</p>
                  <p className={styles.description__row__short}>61/63</p>
                </div>
              </div>
              <h3 className={styles.description__title}>Women's</h3>
              <div className={styles.description__block2}>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Size</p>
                  <p className={styles.description__row__short}>XS</p>
                  <p className={styles.description__row__short}>S</p>
                  <p className={styles.description__row__short}>M</p>
                  <p className={styles.description__row__short}>L</p>
                  <p className={styles.description__row__short}>XL</p>
                  <p className={styles.description__row__short}>2XL</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Bust (cm)</p>
                  <p className={styles.description__row__short}>82-86</p>
                  <p className={styles.description__row__short}>86-90</p>
                  <p className={styles.description__row__short}>90-94</p>
                  <p className={styles.description__row__short}>94-98</p>
                  <p className={styles.description__row__short}>98-102</p>
                  <p className={styles.description__row__short}>102-106</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Waist (cm)</p>
                  <p className={styles.description__row__short}>62-66</p>
                  <p className={styles.description__row__short}>66-70</p>
                  <p className={styles.description__row__short}>70-74</p>
                  <p className={styles.description__row__short}>74-78</p>
                  <p className={styles.description__row__short}>78-82</p>
                  <p className={styles.description__row__short}>82-86</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Hip (cm)</p>
                  <p className={styles.description__row__short}>88-92</p>
                  <p className={styles.description__row__short}>92-96</p>
                  <p className={styles.description__row__short}>96-100</p>
                  <p className={styles.description__row__short}>100-104</p>
                  <p className={styles.description__row__short}>104-108</p>
                  <p className={styles.description__row__short}>108-112</p>
                </div>
                <div className={styles.description__row}>
                  <p className={styles.description__row__long}>Sleeve Leangh (cm)</p>
                  <p className={styles.description__row__short}>60</p>
                  <p className={styles.description__row__short}>60</p>
                  <p className={styles.description__row__short}>61</p>
                  <p className={styles.description__row__short}>62</p>
                  <p className={styles.description__row__short}>63</p>
                  <p className={styles.description__row__short}>63</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pass 3 */}
      <div
        className={`${styles.pass} ${activePass === 3 ? styles.active : ''}`}
        onClick={() => toggleDescription(3)}
        style={{ backgroundColor: '#bb96fe' }}
      >
        <div className={styles.passHeader}>
          <h3 className={styles.passHeader__title}>Delivery & Return</h3>
          <span className={styles.arrow}>{activePass === 3 ? <OpenArrow /> : <ClosedArrow />}</span>
        </div>

        {activePass === 3 && (
          <div className={styles.passContent}>
            <div className={styles.description}>
              <h3 className={styles.description__title}>Delivery</h3>
              <p className={styles.description__desc__mb40}>
                Delivery is by dhl. You can choose address delivery or delivery to the branch. The
                average delivery time is 3-7 days, shipments are made every day. Delivery is paid
                upon receipt of the parcel according to the carrier's tariffs.
              </p>
              <h3 className={styles.description__title}>Payment</h3>
              <p className={styles.description__desc__mb40}>
                Payment for the order takes place on our website during order placement.
              </p>
              <h3 className={styles.description__title}>Return</h3>
              <p className={styles.description__desc}>
                You can return the product within 14 days after receiving the package. Only goods
                without signs of use can be returned. Delivery costs are borne by the customer,
                except for the exchange of a manufacturing defect.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PassSection;
