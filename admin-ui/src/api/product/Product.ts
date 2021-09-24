import { Image } from "../image/Image";
import { LineItem } from "../lineItem/LineItem";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  vendor: string | null;
  price: number | null;
  images?: Array<Image>;
  lineItems?: Array<LineItem>;
};
