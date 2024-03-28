import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyrestraunt = () => {
  const createaMyRestraunt = async (FormData: any) => {
    const response = await axios.post(
      `${API_BASE_URL}/api/restaurant`,
      FormData
    );
    console.log(response.data);
    return response;
  };

  const { mutateAsync: createRestaurant, isPending: isPending } = useMutation({
    mutationFn: createaMyRestraunt,
    onSuccess: (response) => {
      toast.success(response.data.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  return {
    isPending,
    createRestaurant,
  };
};
