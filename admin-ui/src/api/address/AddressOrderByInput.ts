import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  address_1?: SortOrder;
  address_2?: SortOrder;
  city?: SortOrder;
  state?: SortOrder;
  country?: SortOrder;
  zip?: SortOrder;
  phone?: SortOrder;
  isDefault?: SortOrder;
  customerId?: SortOrder;
};
