interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrcode: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];
}

export type UpdatedProductProps = Pick<
    Product,
    "id" | "title" | "price" | "description"
>;

export interface GetProductsProps {
    page?: number;
    limit?: number;
    skip?: number;
}

export interface ProductsApiResponse {
    products: Product[] | undefined;
}

export type Method = "PUT" | "DELETE" | null;

export interface UpdateProductProps {
    id: number;
    product: UpdatedProductProps;
    method: Method;
}

export interface DeleteProductApiResponse extends Product {
    isDeleted: boolean;
    deletedOn: string;
}
