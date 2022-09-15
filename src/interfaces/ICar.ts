import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number({
    required_error: 'doorsQty is required',
    invalid_type_error: 'doorsQty must be a number',
  }).gte(2, { message: 'doorsQty must be 2 or higher' })
    .lte(4, { message: 'Year must be lower than 4' })
    .int(),
  seatsQty: z.number({
    required_error: 'seatsQty is required',
    invalid_type_error: 'seatsQty must be a number',
  }).gte(2, { message: 'doorsQty must be 2 or higher' })
    .lte(7, { message: 'Year must be lower than 7' })
    .int(),
});

const CarWtihVehicleSchema = z.intersection(VehicleZodSchema, CarZodSchema);

type ICar = z.infer<typeof CarWtihVehicleSchema>;

export { CarZodSchema, ICar };