// Enums
export enum PromotionType {
  MEMBER = "MEMBER",
  CAMPAIGN = "CAMPAIGN",
}

export enum CancellationType {
  FREE_CANCELLATION = "FREE_CANCELLATION",
  NOT_REFUNDABLE = "NOT_REFUNDABLE",
}

export enum RatingType {
  SELF = "self",
  STAR = "star",
}

export enum ImageType {
  PRIMARY = "PRIMARY",
}

export enum SortOption {
  PRICE_LOW = "price-low",
  PRICE_HIGH = "price-high",
}

export interface HotelData {
  results: HotelResult[];
}

export interface HotelResult {
  id: string;
  property: Property;
  offer: Offer;
}

export interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
}

export interface PreviewImage {
  url: string;
  caption: string;
  imageType: ImageType;
}

export interface Rating {
  ratingValue: number;
  ratingType: RatingType;
}

export interface Offer {
  promotion: Promotion | null;
  name: string;
  displayPrice: Price;
  savings: Price | null;
  cancellationOption: CancellationOption;
}

export interface Promotion {
  title: string;
  type: PromotionType;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface CancellationOption {
  cancellationType: CancellationType;
}
