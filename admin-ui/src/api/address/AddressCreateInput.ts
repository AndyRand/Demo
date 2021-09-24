import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  zip?: string | null;
  phone?: string | null;
  isDefault?: boolean | null;
  customer?: CustomerWhereUniqueInput | null;
};
