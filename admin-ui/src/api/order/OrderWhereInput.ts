import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  customer?: CustomerWhereUniqueInput;
  address?: AddressWhereUniqueInput;
  comments?: StringNullableFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
