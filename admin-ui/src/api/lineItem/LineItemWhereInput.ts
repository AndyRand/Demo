import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LineItemWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
