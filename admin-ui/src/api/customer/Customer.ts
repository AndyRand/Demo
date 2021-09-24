import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  comments: string | null;
  addresses?: Array<Address>;
  orders?: Array<Order>;
};
