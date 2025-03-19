import React, { useMemo } from "react";
import { useHotelListings } from "@/hooks/useHotelListings";
import {
  HorizontalStack,
  Select,
  Text,
  VerticalStack,
} from "@/design-system/components";
import { SortOption } from "@/api";
import * as styles from "./HotelListing.css";
import { HotelCard } from "./HotelCard";

const sortOptions = [
  {
    label: "Price: High-Low",
    value: SortOption.PRICE_HIGH,
  },
  {
    label: "Price: Low-High",
    value: SortOption.PRICE_LOW,
  },
];

export const HotelListing = () => {
  const { hotelResults, isLoading } = useHotelListings();
  const [selectedSorting, setSelectedSorting] = React.useState<SortOption>(
    SortOption.PRICE_HIGH
  );

  const sortedHotels = useMemo(() => {
    if (!hotelResults) return [];

    return [...hotelResults].sort((a, b) => {
      const priceA = a.offer.displayPrice.amount;
      const priceB = b.offer.displayPrice.amount;

      if (selectedSorting === SortOption.PRICE_HIGH) {
        return priceB - priceA;
      }
      return priceA - priceB;
    });
  }, [hotelResults, selectedSorting]);

  if (isLoading) {
    return <Text>Loading hotel listing information</Text>;
  }

  if (!sortedHotels || sortedHotels.length === 0) {
    return <Text>No results found</Text>;
  }

  const hotelsListed = sortedHotels.length;

  const handleSelect = (value: SortOption) => {
    setSelectedSorting(value);
  };

  return (
    <VerticalStack gap={16}>
      <HorizontalStack gap={12} justifyContent="space-between" flexWrap="wrap">
        <div>
          <Text as="span" weight={600}>
            {hotelsListed}{" "}
          </Text>
          <Text as="span" className={styles.italic}>
            hotels in{" "}
          </Text>
          <Text as="span" weight={600}>
            Sydney.
          </Text>
        </div>
        <Select
          label="Sort By"
          options={sortOptions}
          onChange={handleSelect}
          value={selectedSorting}
        />
      </HorizontalStack>
      <div className={styles.listingGrid}>
        {sortedHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </VerticalStack>
  );
};
