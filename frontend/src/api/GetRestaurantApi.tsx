import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APIkey = import.meta.env.VITE_API_OPENCAGEDATA;

export const useGetNearbyRestaurants = () => {
  const sentGeoLocation = async (location: any) => {
    const response = await axios.post(`${API_BASE_URL}/api/nearest-store`, location);
    return response.request.response;
  };
  const {
    mutate: getNearestRestaraunts,
    isPending: isPending,
    data,
  } = useMutation({
    mutationFn: sentGeoLocation,
  });

  return {
    isPending,
    getNearestRestaraunts,
    restaurants: data,
  };
};




export const useGetRestaurantLocation = (
  latitude: number,
  longitude: number
) => {
  const getLocationInfo = async () => {
    try {
      console.log(latitude, longitude);

      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`
      );
      const data = await response.json();

      console.log(data);
      if (data.status.code === 200) {
        console.log("results:", data.results);
        const responseData =  data.results[0].formatted;
          return responseData.split('-')[0]
      } else {
        throw new Error("Error fetching location information");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching location information");
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: [latitude, longitude],
    queryFn: getLocationInfo,
  });
  return { isLoading, location: data };
};



const useGetRestaurantwithoutLocation = async () => {
    const getRestaraunt = async () => {
      return  await axios.get(`${API_BASE_URL}/api/all-stores`).then((response)=>{
            response.data
        })
    }
}