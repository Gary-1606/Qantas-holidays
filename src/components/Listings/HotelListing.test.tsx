import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HotelListing } from "./HotelListing";
import { useHotelListings } from "./../../hooks/useHotelListings";
import { SortOption } from "./../../api";

// Mock the useHotelListings hook
jest.mock("./../../hooks/useHotelListings", () => ({
  useHotelListings: jest.fn(),
}));

const mockHotels = [
  {
    id: "1",
    property: {
      id: "1",
      title: "Hotel A",
      address: ["123 Test St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: "star",
      },
    },
    offer: {
      displayPrice: {
        amount: 300,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe Balcony Room",
    },
  },
  {
    id: "2",
    property: {
      id: "2",
      title: "Hotel B",
      address: ["456 Test St", "Sydney"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: "self",
      },
    },
    offer: {
      displayPrice: {
        amount: 200,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      name: "Deluxe Balcony Room",
    },
  },
];

describe("HotelListing", () => {
  beforeEach(() => {
    (useHotelListings as jest.Mock).mockReturnValue({
      hotelResults: mockHotels,
      isLoading: false,
    });
  });

  it("renders hotel listings correctly", () => {
    render(<HotelListing />);

    // Check if both hotels are rendered
    expect(screen.getByText("Hotel A")).toBeInTheDocument();
    expect(screen.getByText("Hotel B")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    (useHotelListings as jest.Mock).mockReturnValue({
      hotelResults: null,
      isLoading: true,
    });

    render(<HotelListing />);
    expect(
      screen.getByText("Loading hotel listing information")
    ).toBeInTheDocument();
  });

  it("shows no results message when no hotels are available", () => {
    (useHotelListings as jest.Mock).mockReturnValue({
      hotelResults: [],
      isLoading: false,
    });

    render(<HotelListing />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("sorts hotels correctly when changing sort option", () => {
    render(<HotelListing />);

    // Get the sort select element
    const sortSelect = screen.getByLabelText("Sort By");

    // Change sort option to Price: Low-High
    fireEvent.change(sortSelect, { target: { value: SortOption.PRICE_LOW } });

    // Get all hotel titles in order
    const hotelTitles = screen
      .getAllByText(/Hotel [AB]/)
      .map((el) => el.textContent);

    // Verify hotels are sorted by price (low to high)
    expect(hotelTitles[0]).toBe("Hotel B");
    expect(hotelTitles[1]).toBe("Hotel A");
  });
});
