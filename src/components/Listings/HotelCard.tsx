import { HotelResult } from "@/api";
import {
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
      >
        {offer.promotion?.title && (
          <Text
            as="span"
            size="p16"
            weight={500}
            color="red"
            className={styles.promotionTag}
          >
            {offer.promotion.title}
          </Text>
        )}
      </div>
      <VerticalStack className={styles.contentContainer}>
        <VerticalStack>
          <HorizontalStack gap={8}>
            <Text weight={600} size="p25" className={styles.title}>
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
          <VerticalStack gap={32} justifyContent="space-between">
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
          <VerticalStack gap={4}>
            <Text size="p12">1 night total (AUD)</Text>
            <Text>
              <Text as="span" size="p20" className={styles.sup}>
                $
              </Text>
              <Text as="span" size="p40">
                {offer.displayPrice.amount}
              </Text>
            </Text>
            {offer.savings && (
              <Text color="red" size="p20" weight={500}>
                Save ${offer.savings.amount}~
              </Text>
            )}
          </VerticalStack>
        </HorizontalStack>
      </VerticalStack>
    </HorizontalStack>
  );
};
