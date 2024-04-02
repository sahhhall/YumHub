import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const useGetNearbyRestaurants = () => {
    
    const sentGeoLocation = async ( res: any ) => { 
      const response =  await axios.post(
            `${API_BASE_URL}/api/nearest-store`,
             res
        )
        return response.request.response;
    }   
    const {
        mutate: getNearestRestaraunts,
        isPending: isPending ,
        data
    } = useMutation({
        mutationFn: sentGeoLocation,

    })
   
    return {
        isPending,
        getNearestRestaraunts,
        restaurants: data
      };
}