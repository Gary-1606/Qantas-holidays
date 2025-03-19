import React from "react";
import { render, screen } from "@testing-library/react";
import { HotelCard } from "./HotelCard";
import {
  HotelResult,
  RatingType,
  CancellationType,
  ImageType,
  PromotionType,
} from "./../../api";

const mockHotel: HotelResult = {
  id: "1",
  property: {
    propertyId: "1",
    title: "Test Hotel",
    address: ["123 Test St", "Sydney", "NSW 2000"],
    previewImage: {
      url: "https://example.com/image.jpg",
      caption: "Test Hotel Image",
      imageType: ImageType.PRIMARY,
    },
    rating: {
      ratingValue: 4.5,
      ratingType: RatingType.STAR,
    },
  },
  offer: {
    name: "Best Available Rate",
    displayPrice: {
      amount: 299,
      currency: "AUD",
    },
    promotion: {
      title: "Special Offer",
      type: PromotionType.CAMPAIGN,
    },
    cancellationOption: {
      cancellationType: CancellationType.FREE_CANCELLATION,
    },
    savings: {
      amount: 50,
      currency: "AUD",
    },
  },
};

describe("HotelCard", () => {
  it("renders hotel information correctly", () => {
    render(<HotelCard hotel={mockHotel} />);

    // Check hotel title
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();

    // Check address
    expect(
      screen.getByText("123 Test St, Sydney, NSW 2000")
    ).toBeInTheDocument();

    // Check price
    expect(screen.getByText("299")).toBeInTheDocument();

    // Check promotion if present
    expect(screen.getByText("Special Offer")).toBeInTheDocument();

    // Check cancellation policy
    expect(screen.getByText("Free cancellation")).toBeInTheDocument();

    // Check savings
    expect(screen.getByText("Save $50~")).toBeInTheDocument();
  });

  it("renders without promotion when not provided", () => {
    const hotelWithoutPromotion = {
      ...mockHotel,
      offer: {
        ...mockHotel.offer,
        promotion: null,
      },
    };

    render(<HotelCard hotel={hotelWithoutPromotion} />);

    // Verify promotion is not shown
    expect(screen.queryByText("Special Offer")).not.toBeInTheDocument();
  });

  it("renders without savings when not provided", () => {
    const hotelWithoutSavings = {
      ...mockHotel,
      offer: {
        ...mockHotel.offer,
        savings: null,
      },
    };

    render(<HotelCard hotel={hotelWithoutSavings} />);

    // Verify savings is not shown
    expect(screen.queryByText(/Save/)).not.toBeInTheDocument();
  });
});
