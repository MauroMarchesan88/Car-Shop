import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const BikeZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
    invalid_type_error: 'engineCapacity must be a number',
  }).gt(0, { message: 'engineCapacity must be 0 or higher' })
    .lte(2500, { message: 'engineCapacity must be lower than 2500' })
    .int(),
});

const BikeWtihVehicleSchema = z.intersection(VehicleZodSchema, BikeZodSchema);

type IMotorcycle = z.infer<typeof BikeWtihVehicleSchema>;

export { BikeWtihVehicleSchema, IMotorcycle };