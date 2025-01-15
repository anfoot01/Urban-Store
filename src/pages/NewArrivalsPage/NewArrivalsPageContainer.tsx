import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Paginator } from "primereact/paginator";
import { fetchNewArrivals } from "../../api/productsApi";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { DataProduct, Product } from "../../types/products";
import "primereact/resources/primereact.min.css";
import styles from "./NewArrivalsPage.module.scss";


export const NewArrivalsPageContainer: React.FC = () => {
    const { data, isLoading, error } = useQuery<DataProduct, Error>({
        queryKey: ["products"],
        queryFn: fetchNewArrivals,
    });

    const css = `
        .p-paginator-page, .p-paginator-next, .p-paginator-last, .p-paginator-first, .p-paginator-prev, .p-paginator-current {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            user-select: none;
            overflow: hidden;
            position: relative;
            border: 1px solid var(--light-orange-2-color);
            font-size: 24px;
        }
    `;

    const itemsPerPage = 20;
    const [first, setFirst] = useState(0);

    const products = data?.content || [];

    const onPageChange = (event: { first: number; rows: number }) => {
        setFirst(event.first);
    };

    const currentProducts = products.slice(first, first + itemsPerPage);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    if (products.length === 0) return <div>Нет данных</div>;

    return (
        <div className={styles.cardContainerPage}>
            <div className={styles.cardContainerPage__cards}>
                {currentProducts.map((product: Product, index) => (
                    <CardProduct
                        key={`${product.id}-${index}`}
                        img={product.images[0]}
                        title={product.name}
                        shop={product.similarProducts?.[0]?.shopName || "Магазин не указан"}
                        price={product.currentPrice}
                    />
                ))}
            </div>
            <div className={styles.pagination}>
                <Paginator
                    first={first}
                    rows={itemsPerPage}
                    totalRecords={products.length}
                    onPageChange={onPageChange}
                    className={styles.customPaginator}
                />
                <style>{css}</style>
            </div>
        </div>
    );
};
