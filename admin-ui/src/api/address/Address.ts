import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type Address = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
  phone: string | null;
  isDefault: boolean | null;
  customer?: Customer | null;
  orders?: Array<Order>;
};
