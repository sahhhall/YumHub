import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { TRestrauntFormData } from "../types/CreateRestraunt";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyrestraunt = () => {
  const createaMyRestraunt = async (FormData: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/restaurant`,
        FormData
      );
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create reastraunt");
    }
  };

  const {
    reset,
    error,
    mutateAsync: createRestaurant,
    isPending: isPending,
  } = useMutation({
    mutationFn: createaMyRestraunt,
    onSuccess: () => {
      toast.success("Restaurant addded successfully!");
    },
    onError: () => {
        
      toast.error(error?.toString());
      reset();
    },
  });

  return {
    isPending,
    createRestaurant,
  };
};
