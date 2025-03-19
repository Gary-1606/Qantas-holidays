import React, { FC } from "react";
import * as styles from "./StarRating.css";
import { clsx } from "clsx";
import { HorizontalStack } from "..";

interface StarRatingProps {
  rating: number;
  type: "star" | "self";
  className?: string;
}

export const StarRating: FC<StarRatingProps> = ({
  rating,
  type,
  className,
}) => {
  // Ensure rating is between 0 and 5
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  const StarIcon = ({ fillPercentage }: { fillPercentage: number }) => (
    <div className={styles.iconWrapperStar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        className={styles.unfilledIcon}
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        className={styles.icon}
      >
        <defs>
          <linearGradient
            id={`starFill-${fillPercentage}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset={`${fillPercentage}%`}
              style={{ stopColor: "#FACC15", stopOpacity: 1 }}
            />
            <stop
              offset={`${fillPercentage}%`}
              style={{ stopColor: "#FACC15", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill={`url(#starFill-${fillPercentage})`}
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const CircleIcon = ({ fillPercentage }: { fillPercentage: number }) => (
    <div className={styles.iconWrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        className={styles.unfilledIcon}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        className={styles.icon}
      >
        <defs>
          <linearGradient
            id={`circleFill-${fillPercentage}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset={`${fillPercentage}%`}
              style={{ stopColor: "#FACC15", stopOpacity: 1 }}
            />
            <stop
              offset={`${fillPercentage}%`}
              style={{ stopColor: "#FACC15", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="10"
          fill={`url(#circleFill-${fillPercentage})`}
          stroke="#FACC15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <HorizontalStack gap={2} alignItems="center" className={className}>
      {[1, 2, 3, 4, 5].map((index) => {
        /**
         * First calculate how much of this star should be filled (0-1)
         * Then convert to percentage (0-100) and clamp between 0 and 100
         * 
         * For a rating of 3.7:
              First star (index 1): 3.7 - (1-1) = 3.7 → 100% filled
              Second star (index 2): 3.7 - (2-1) = 2.7 → 100% filled
              Third star (index 3): 3.7 - (3-1) = 1.7 → 100% filled
              Fourth star (index 4): 3.7 - (4-1) = 0.7 → 70% filled
              Fifth star (index 5): 3.7 - (5-1) = -0.3 → 0% filled
         */
        const ratingForThisStar = normalizedRating - (index - 1);
        const fillPercentage = Math.min(
          Math.max(ratingForThisStar * 100, 0),
          100
        );

        return (
          <div key={index}>
            {type === "star" ? (
              <StarIcon fillPercentage={fillPercentage} />
            ) : (
              <CircleIcon fillPercentage={fillPercentage} />
            )}
          </div>
        );
      })}
    </HorizontalStack>
  );
};
