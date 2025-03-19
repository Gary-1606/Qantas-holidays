import { SWRKeys } from "@/constants";
import useSWR from "swr";
import { operations } from "@/api";

export const useHotelListings = () => {
  const { data, isLoading, error } = useSWR(
    SWRKeys.HOTEL_LISTINGS,
    async () => {
      return operations.getHotelListings();
    }
  );

  const hotelResults = data?.results;

  return {
    hotelResults,
    isLoading,
    error,
  };
};
