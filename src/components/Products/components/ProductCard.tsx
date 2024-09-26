import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Product } from "../../../interfaces/product";
import { Link } from "react-router-dom";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={product.title.toLowerCase() + " image"}
                height="140"
                image={product.thumbnail}
                // loading="lazy"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.title.slice(0, 20) + "..."}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {product.description.slice(0, 50) + "..."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/buy/${product.id}`} size="small">
                    Buy Now
                </Button>
                <Button
                    component={Link}
                    to={`/products/${product.id}`}
                    size="small"
                >
                    Explore
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
