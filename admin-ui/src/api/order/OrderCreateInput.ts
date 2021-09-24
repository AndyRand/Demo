import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  address?: AddressWhereUniqueInput | null;
  comments?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
