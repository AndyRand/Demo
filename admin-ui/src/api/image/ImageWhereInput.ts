import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  src?: StringNullableFilter;
  width?: StringNullableFilter;
  height?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
};
