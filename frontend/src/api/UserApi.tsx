import { User } from "@/types/UserTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetUserDetails =  ()  => {
  const getUser = async (): Promise<User> => {
    return await axios.get(`${API_BASE_URL}/api/user-details`,{ withCredentials: true }).then((res) => res.data.user);
  }; 

  const { isLoading, data } = useQuery({
    queryKey: ["userDetails"],
    queryFn: getUser,
  });

  console.log("this is",data);
  
  return { isLoading, user: data }
};
