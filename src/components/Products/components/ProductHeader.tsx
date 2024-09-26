import { Typography } from "@mui/material";

const ProductHeader = () => {
    return (
        <Typography
            sx={{
                padding: "20px",
                borderBottom: "4px solid gray",
            }}
            variant="h4"
            component="h1"
            gutterBottom
        >
            Our Products
        </Typography>
    );
};

export default ProductHeader;
