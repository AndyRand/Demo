import { SortOrder } from "../../util/SortOrder";

export type LineItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
};
