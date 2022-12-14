import { ObjectId } from "mongodb";

export enum InvoicePaymentTerms {
  ONE_DAY = 1,
  ONE_WEEK = 7,
  TWO_WEEKS = 14,
  ONE_MONTH = 30,
}

export enum InvoiceStatus {
  DRAFT = "draft",
  PENDING = "pending",
  PAID = "paid",
}

export interface Address {
  _id?: ObjectId;
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Client {
  _id?: ObjectId;
  name: string;
  email: string;
  address: Address;
}
export interface Item {
  _id?: ObjectId;
  name: string;
  quantity: number;
  price: number;
  total: number;
}
export interface Invoice {
  _id: ObjectId;
  code: string;
  description: string;
  paymentTerms: InvoicePaymentTerms;
  status: InvoiceStatus;
  total: number;
  paymentDue: string;
  client: Client;
  sender: Address;
  createdAt: string;
  items: Item[];
}
export interface SelectOption {
  id: number;
  label: string;
}

export interface InputProps {
  name: string;
  label: string;
  error: boolean;
  placeholder?: string;
  type?: "text" | "date" | "select" | "number";
  options?: SelectOption[];
  disabled?: boolean;
  value?: string | number | Date;
  onChange?: (e: any) => void;
  readonly?: boolean;
  readonlyValue?: string | number;
}
