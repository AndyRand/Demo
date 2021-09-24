import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageUpdateInput = {
  src?: string | null;
  width?: string | null;
  height?: string | null;
  product?: ProductWhereUniqueInput | null;
};
