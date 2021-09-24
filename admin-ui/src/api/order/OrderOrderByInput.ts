import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customerId?: SortOrder;
  addressId?: SortOrder;
  comments?: SortOrder;
  totalPrice?: SortOrder;
  userId?: SortOrder;
};
