import React, { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNewArrivals } from "../../../api/productsApi";
import { BtnView } from '../../UI/BtnView/BtnView';
import { CardProduct } from "../../CardProduct/CardProduct";
import { DataProduct, Product } from "../../../types/products";
import { CarouselArrows } from "../CarouselArrows/CarouselArrows";
import styles from "./NewArrivals.module.scss";

export const NewArrivalsContainer: React.FC = () => {
    const { data, isLoading, error } = useQuery<DataProduct, Error>({
        queryKey: ["products"],
        queryFn: fetchNewArrivals,
    });

    const [currentPage, setCurrentPage] = useState(0); // Текущая страница
    const itemsPerPage = 4; // Количество карточек на странице
    const totalCardsToShow = 20; // Общее количество карточек
    const carouselRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер

    // Проверка на undefined для data и data.content
    const products = data?.content || [];

    // Генерация карточек
    const extendedProducts = products.length > 0
        ? Array.from(
              { length: totalCardsToShow },
              (_, index) => products[index % products.length]
          )
        : [];

    // Общее количество страниц
    const totalPages = Math.ceil(totalCardsToShow / itemsPerPage);

    // Обновление прокрутки при изменении `currentPage`
    useEffect(() => {
        if (carouselRef.current) {
            const scrollAmount = currentPage * carouselRef.current.offsetWidth;
            carouselRef.current.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }, [currentPage]);

    // Обработчики прокрутки
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

    // Ранний возврат только для JSX
    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    if (products.length === 0) return <div>Нет данных</div>;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContainer__panel}>
                <div>
                    <h2>New Arrivals</h2>
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
                <BtnView to="/new-arrivals" />
            </div>
        </div>
    );
};
