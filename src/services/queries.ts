import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "./api";
import { GetProductsProps } from "../interfaces/product";

export const useProducts = ({ page = 1, limit = 10 }: GetProductsProps) => {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => getProducts({ limit, skip: (page - 1) * limit }),
    });
};

export const useProductById = (id: number) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
    });
};
