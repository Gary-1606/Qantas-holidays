import { HotelResult } from "@/api";
import {
  Heading,
  HorizontalStack,
  StarRating,
  VerticalStack,
  Text,
} from "@/design-system/components";
import React, { FC } from "react";
import * as styles from "./HotelCard.css";

type Props = {
  hotel: HotelResult;
};

export const HotelCard: FC<Props> = ({ hotel }) => {
  const { property, offer } = hotel;
  return (
    <HorizontalStack gap={16} alignItems="stretch" className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${property.previewImage.url})` }}
      />
      <div className={styles.contentContainer}>
        <VerticalStack>
          <HorizontalStack gap={8}>
            <Text weight={600} size="p20" className={styles.title}>
              {property.title}
            </Text>
            <StarRating
              rating={property.rating.ratingValue}
              type={property.rating.ratingType}
            />
          </HorizontalStack>
          <Text color="subtle" size="p14">
            {property.address.join(", ")}
          </Text>
        </VerticalStack>
        <HorizontalStack justifyContent="space-between" gap={16}>
          <VerticalStack justifyContent="space-between">
            <Text as="span" color="red" className={styles.offerTag}>
              {offer.name}
            </Text>
            {offer.cancellationOption.cancellationType ===
              "FREE_CANCELLATION" && (
              <Text as="span" color="green">
                Free cancellation
              </Text>
            )}
          </VerticalStack>
        </HorizontalStack>
      </div>
    </HorizontalStack>
  );
};
