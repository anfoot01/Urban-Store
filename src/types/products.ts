export interface CardProductProps {
    img: string;
    title: string;
    shop: string;
    price?: number;
    priceCurrent?: number;
    priceOld?: number;

}

export interface DataProduct {
    content: Product[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        unpaged: boolean;
    }

    size: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    totalElements: number;
    totalPages: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    currentPrice: number;
    oldPrice: number;
    amount: number;
    images: string[];
    purchaseCount: number;
    shopId: string;
    averageRating: number;
    reviews: Array<{
        id: string;
        productId: string;
        userId: string;
        content: string;
        rating: number;
        createdAt: string;
    }>;
    similarProducts: Array<{
        id: string;
        name: string;
        subCategory: string;
        currentPrice: number;
        oldPrice: number;
        image: string;
        shopName: string;
    }> | null;
}
