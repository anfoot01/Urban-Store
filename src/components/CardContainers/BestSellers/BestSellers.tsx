import React, { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBestSellers } from "../../../api/productsApi";
import { BtnView } from '../../UI/BtnView/BtnView';
import { CardProduct } from "../../CardProduct/CardProduct";
import { DataProduct, Product } from "../../../types/products";
import { CarouselArrows } from "../CarouselArrows/CarouselArrows";
import styles from "./BestSellers.module.scss";

export const BestSellersContainer: React.FC = () => {
    const { data, isLoading, error } = useQuery<DataProduct, Error>({
        queryKey: ["products"],
        queryFn: fetchBestSellers,
    });

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalCardsToShow = 20;
    const carouselRef = useRef<HTMLDivElement>(null);

    const products = data?.content || [];

    const extendedProducts = products.length > 0
        ? Array.from(
              { length: totalCardsToShow },
              (_, index) => products[index % products.length]
          )
        : [];

    const totalPages = Math.ceil(totalCardsToShow / itemsPerPage);

    useEffect(() => {
        if (carouselRef.current) {
            const scrollAmount = currentPage * carouselRef.current.offsetWidth;
            carouselRef.current.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }, [currentPage]);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    if (products.length === 0) return <div>Нет данных</div>;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContainer__panel}>
                <div>
                    <h2>Best Sellers</h2>
                </div>
                <div>
                    <CarouselArrows
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onNext={handleNext}
                        onPrev={handlePrev}
                    />
                </div>
            </div>
            <div className={styles.carouselWrapper}>
                <div className={styles.carousel} ref={carouselRef}>
                    {extendedProducts.map((product: Product, index) => (
                        <CardProduct
                            key={`${product.id}-${index}`}
                            img={product.images[0]}
                            title={product.name}
                            shop={product.similarProducts?.[0]?.shopName || "Магазин не указан"}
                            price={product.currentPrice}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.cardContainer__btn}>
                <BtnView to="/best-sellers" />
            </div>
        </div>
    );
};
