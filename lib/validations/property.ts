import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(8),
  operation_type: z.enum(["sale", "rent", "vacation_rent"]),
  property_type: z.string().min(2),
  price: z.coerce.number().positive().nullable().optional(),
  currency: z.string().default("USD"),
  state: z.string().min(2),
  city: z.string().min(2),
  municipality: z.string().min(2),
  urbanization: z.string().min(2),
  bedrooms: z.coerce.number().int().min(0).nullable().optional(),
  bathrooms: z.coerce.number().min(0).nullable().optional(),
  parking_spaces: z.coerce.number().int().min(0).nullable().optional(),
  area_built: z.coerce.number().positive().nullable().optional(),
  area_land: z.coerce.number().positive().nullable().optional(),
  description: z.string().min(40),
  youtube_url: z.string().url().nullable().optional(),
  panoee_url: z.string().url().nullable().optional(),
  show_virtual_tour: z.boolean().default(false)
});
