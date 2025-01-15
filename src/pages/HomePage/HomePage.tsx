import PopularCategories from '../../components/Categories/PopularCategories';
import MainCategories from '../../components/MainCategories/MainCategories';
import styles from './HomePage.module.scss';
import HeaderBanner from '../../components/Header/HeaderBanner';
import { NewArrivalsContainer } from '../../components/CardContainers/NewArrivals/NewArrivals';
import { OnSaleContainer } from '../../components/CardContainers/OnSale/OnSale';
import { BestSellersContainer } from '../../components/CardContainers/BestSellers/BestSellers';
import { AllItemsContainer } from '../../components/CardContainers/AllItems/AllItems';
const HomePage = () => {
  return (
    <>
      <HeaderBanner />
      <MainCategories />
      <NewArrivalsContainer />
      <OnSaleContainer />
      <BestSellersContainer />
      <AllItemsContainer />
      <div className={styles.divider}></div>
      <PopularCategories />
    </>
);
};

export default HomePage;
