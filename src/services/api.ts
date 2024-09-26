import axios, { AxiosResponse } from "axios";
import { apiConfig } from "../config/apiConfig";
import {
    DeleteProductApiResponse,
    GetProductsProps,
    Product,
    ProductsApiResponse,
    UpdateProductProps,
} from "../interfaces/product";
import { handleError } from "../utils/errors";

const api = axios.create({
    baseURL: apiConfig.baseURL,
});

const getProductById = async (id: number) => {
    try {
        const response = await api.get<Product>(`/products/${id}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const getProducts = async ({ limit = 10, skip = 0 }: GetProductsProps) => {
    try {
        const response = await api.get<ProductsApiResponse>(
            `/products?limit=${limit}&skip=${skip}`
        );
        return response.data.products;
    } catch (error) {
        handleError(error);
    }
};

const updateProduct = async (updateData: UpdateProductProps) => {
    try {
        let response;
        const { id, product, method } = updateData;
        switch (method) {
            case "PUT":
                response = await api.put(
                    `/products/${id}`,
                    JSON.stringify(product)
                );
                return response.data;
            case "DELETE":
                response = await api.delete<
                    AxiosResponse<DeleteProductApiResponse>
                >(`/products/${id}`);
                return response.data;
            default:
                throw new Error("Invalid method");
        }
    } catch (error) {
        handleError(error);
    }
};

export { getProductById, getProducts, updateProduct };
