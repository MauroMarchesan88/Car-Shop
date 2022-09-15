import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be 3 or more characters long' }),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }).gte(1900, { message: 'Year must be higher than 1900' })
    .lte(2022, { message: 'Year must be lower than 2022' }),
  status: z.boolean({
    required_error: 'Status is required',
    invalid_type_error: 'Status must be boolean',
  }).optional(),
  buyValue: z.number({
    required_error: 'BuyValue is required',
    invalid_type_error: 'BuyValue must be a number',
  }).int(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { VehicleZodSchema, IVehicle };