import styles from './ProductPage.module.scss';
import BreadCrumbles from '../../components/BreadCrumbles/BreadCrumb';
import ProductPageShortDesc from './ShortDesc';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import PassSection from './FullDesc';
import Reviews from './Reviews';
import MayLike from './MayLike'
const ProductPage = () => (
  <main className={styles.product}>
    <BreadCrumbles />
    <section className={styles.bgGrey}>
      <ImageGallery />
      <ProductPageShortDesc />
    </section>
    <PassSection/>
    <Reviews/>
    <MayLike/>
  </main>
);

export default ProductPage;