import { Box, Button, CircularProgress } from "@mui/material";
import { useProducts } from "../../services/queries";
import Loader from "../Loader";
import ProductHeader from "./components/ProductHeader";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product";

const Products = () => {
    const [page, setPage] = useState(1);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const limit = 10;

    const productQuery = useProducts({ page, limit });

    useEffect(() => {
        setAllProducts((prev) => [...prev, ...(productQuery.data || [])]);
    }, [productQuery.data]);

    if (productQuery.isPending && page === 1) return <Loader />;

    if (productQuery.isError)
        return <div>Error: {productQuery.error.message}</div>;

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <Box>
            <ProductHeader />
            <ProductList products={allProducts} />
            <Box display="flex" justifyContent="center" mt={5}>
                <Button
                    onClick={loadMore}
                    variant="outlined"
                    disabled={productQuery.isPending}
                >
                    {productQuery.isPending ? (
                        <CircularProgress color="success" size={20} />
                    ) : (
                        "Load More"
                    )}
                </Button>
            </Box>
        </Box>
    );
};

export default Products;
