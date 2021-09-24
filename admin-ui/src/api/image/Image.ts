import { Product } from "../product/Product";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  src: string | null;
  width: string | null;
  height: string | null;
  product?: Product | null;
};
