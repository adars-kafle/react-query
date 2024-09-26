import { Grid, Container } from "@mui/material";
import { ProductsApiResponse } from "../../../interfaces/product";
import ProductCard from "./ProductCard";

const ProductList: React.FC<ProductsApiResponse> = ({ products }) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {products?.map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
