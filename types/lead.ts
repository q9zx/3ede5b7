export type Lead = {
  id: string;
  property_id: string | null;
  source: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  status: "new" | "contacted" | "closed" | "discarded";
  created_at: string;
};
