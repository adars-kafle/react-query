import { Link, useParams } from "react-router-dom";
import { useProductById } from "../../services/queries";
import Loader from "../Loader";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";

const ProductDetails = () => {
    const params = useParams();
    const { data, isLoading, isError } = useProductById(Number(params.id));

    if (isLoading) return <Loader />;

    if (isError)
        return (
            <Typography variant="h4" color="red">
                Error loading the product details!
            </Typography>
        );
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Card>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={data?.images[0] || "/placeholder-img.png"}
                            alt={data?.title}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                {data?.title}
                            </Typography>
                            <Typography
                                fontSize={15}
                                variant="h6"
                                color="text.secondary"
                                gutterBottom
                            >
                                {data?.description}
                            </Typography>
                            <Typography variant="h5" color="text.primary">
                                ${data?.price.toFixed(2)}
                            </Typography>
                            <Box mt={3} display="flex" gap={2}>
                                <Button
                                    component={Link}
                                    to={`/products/update/${data?.id}?method=PUT`}
                                    variant="contained"
                                    color="primary"
                                >
                                    Edit Product
                                </Button>
                                <Button
                                    component={Link}
                                    to={`/products/update/${data?.id}?method=DELETE`}
                                    variant="contained"
                                    color="primary"
                                >
                                    Delete Product
                                </Button>
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default ProductDetails;
