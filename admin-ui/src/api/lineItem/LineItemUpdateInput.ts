import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type LineItemUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
};
