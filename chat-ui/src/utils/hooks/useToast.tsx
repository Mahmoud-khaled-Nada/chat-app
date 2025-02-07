import { toast, ToastOptions } from "react-toastify";

interface UseToast {
  success: (data: string, options?: ToastOptions) => void;
  error: (data: string, options?: ToastOptions) => void;
  info: (data: string, options?: ToastOptions) => void;
}

export function useToast(
  defaultOptions: ToastOptions = { position: "top-center", hideProgressBar: true }
): UseToast {
  const success = (data: string, options?: ToastOptions) =>
    toast.success(data, { ...defaultOptions, ...options });

  const error = (data: string, options?: ToastOptions) =>
    toast.error(data, { ...defaultOptions, ...options });

  const info = (data: string, options?: ToastOptions) => toast.info(data, { ...defaultOptions, ...options });

  return { success, error, info };
}
