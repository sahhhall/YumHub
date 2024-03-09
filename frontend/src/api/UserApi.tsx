import { User } from "@/types/UserTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Toaster, toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetUserDetails = () => {
  const getUser = async (): Promise<User> => {
    return await axios
      .get(`${API_BASE_URL}/api/user-details`, { withCredentials: true })
      .then((res) => res.data.user);
  };

  const { isLoading, data } = useQuery({
    queryKey: ["userDetails"],
    queryFn: getUser,
  });

  return { isLoading, user: data };
};

export const useUpdateApi = () => {
  const updateUserReq = async (FormData: any) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/update-profile`,
        FormData
      );
      console.log(response);

      return response.data;
    } catch (error) {
      throw new Error("Failed to update profile");
    }
  };

  const {
    mutateAsync: updateUser,
    isPending: isPending,
    isSuccess,
    error,
    reset,
  } = useMutation({
    mutationFn: updateUserReq,
    
  });

  if (error) {
    toast.error(error.toString());
    reset();
  }

  if (isSuccess) {
   
    console.log(toast.success("Profile Updated"),"1")
  }

  return {
    updateUser,
    isPending,
    isSuccess,
  };
};
