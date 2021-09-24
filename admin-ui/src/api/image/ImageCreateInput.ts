import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageCreateInput = {
  src?: string | null;
  width?: string | null;
  height?: string | null;
  product?: ProductWhereUniqueInput | null;
};
