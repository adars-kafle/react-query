import { toast } from "react-hot-toast";

const toastSuccess = (message: string) => toast.success(message);
const toastError = (message: string) => toast.error(message);
const toastLoading = (message: string, promise: Promise<any>) =>
    toast.promise(promise, {
        loading: message,
        success: (data) => `${message} successful`,
        error: (err) => `${message} failed. Reason: ${err}`,
    });

export { toastSuccess, toastError, toastLoading };
