import axios from "axios";
import { DataProduct } from "../types/products";

const API_URL_NEW_ARRIVALS = "https://urban-market-enoz.onrender.com/api/v1/products/new-arrivals";
const API_URL_ON_SALE = "https://urban-market-enoz.onrender.com/api/v1/products/on-sale";
const API_URL_BEST_SELLERS = "https://urban-market-enoz.onrender.com/api/v1/products/best-sellers";
//const API_URL_ALL_ITEMS = "https://urban-market-enoz.onrender.com/api/v1/products/best-sellers";

export const fetchNewArrivals = async (): Promise<DataProduct> => {
    const response = await axios.get(API_URL_NEW_ARRIVALS);
    return response.data;
};

export const fetchOnSaleProducts = async (): Promise<DataProduct> => {
    const response = await axios.get(API_URL_ON_SALE);
    //console.log(response.data);
    return response.data;
};

export const fetchBestSellers = async (): Promise<DataProduct> => {
    const response = await axios.get(API_URL_BEST_SELLERS);
    return response.data;
};

