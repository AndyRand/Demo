import { Customer } from "../customer/Customer";
import { Address } from "../address/Address";
import { User } from "../user/User";
import { LineItem } from "../lineItem/LineItem";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customer?: Customer | null;
  address?: Address | null;
  comments: string | null;
  totalPrice: number | null;
  user?: User | null;
  lineItems?: Array<LineItem>;
};
