import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  src?: SortOrder;
  width?: SortOrder;
  height?: SortOrder;
  productId?: SortOrder;
};
