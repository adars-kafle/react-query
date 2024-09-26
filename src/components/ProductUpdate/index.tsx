import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Method, UpdatedProductProps } from "../../interfaces/product";
import { useProductById } from "../../services/queries";
import useUpdateProduct from "../../services/mutations";
import Loader from "../Loader";

const UpdateProduct: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const method = searchParams.get("method") as Method;

    const [product, setProduct] = useState<UpdatedProductProps | null>(null);
    const { data, isLoading, isError } = useProductById(Number(id));
    const { mutate } = useUpdateProduct();

    useEffect(() => {
        if (data) {
            const { title, price, description } = data;
            setProduct({
                id: data.id,
                title,
                price,
                description,
            });
        }
    }, [data]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return (
            <Typography color="error">Error loading product data</Typography>
        );
    }

    if (!product) {
        return <Typography>No product found</Typography>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prev) => (prev ? { ...prev, [name]: value } : prev));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updateData = {
            id: product.id,
            product,
            method,
        };
        console.log("UPDATED DATA: ", product);
        mutate(updateData);
        navigate("/");
    };

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                {method === "DELETE" ? "Delete" : "Update"} Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    name="title" // Ensure the correct name attribute is used
                    value={product.title || ""}
                    onChange={handleChange}
                    disabled={method === "DELETE"}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Price"
                    name="price"
                    type="number"
                    value={product.price || ""}
                    onChange={handleChange}
                    disabled={method === "DELETE"}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Description"
                    name="description"
                    value={product.description || ""}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    disabled={method === "DELETE"}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color={method === "DELETE" ? "error" : "primary"}
                    sx={{ mt: 2 }}
                >
                    {method === "DELETE" ? "Delete" : "Update"} Product
                </Button>
            </form>
        </Box>
    );
};

export default UpdateProduct;
