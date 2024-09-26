import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateProductProps } from "../interfaces/product";
import { updateProduct } from "./api";
import { toastError, toastSuccess, toastLoading } from "../utils/toasts";

// This is a comment
const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updateData: UpdateProductProps) =>
            updateProduct(updateData),
        onMutate: () => {
            toastLoading("Updating product...", Promise.resolve());
        },
        onSuccess: () => {
            toastSuccess("Product updated successfully!");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: () => {
            console.error("Error updating product!");
            toastError("Error updating product!");
        },
    });
};

export default useUpdateProduct;
