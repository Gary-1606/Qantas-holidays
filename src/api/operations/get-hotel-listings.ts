import {
  HotelData,
  ImageType,
  RatingType,
  PromotionType,
  CancellationType,
} from "../types";
import results from "../data/results.json";

export const getHotelListings = async (): Promise<HotelData> => {
  // Transform the data to match the expected types
  const { results: data } = results;
  const typedResults = {
    results: data.map((result) => ({
      ...result,
      property: {
        ...result.property,
        previewImage: {
          ...result.property.previewImage,
          imageType: result.property.previewImage.imageType as ImageType,
        },
        rating: {
          ...result.property.rating,
          ratingType: result.property.rating.ratingType as RatingType,
        },
      },
      offer: {
        ...result.offer,
        promotion: result.offer.promotion
          ? {
              ...result.offer.promotion,
              type: result.offer.promotion.type as PromotionType,
            }
          : null,
        cancellationOption: {
          ...result.offer.cancellationOption,
          cancellationType: result.offer.cancellationOption
            .cancellationType as CancellationType,
        },
      },
    })),
  };

  return typedResults;
};
