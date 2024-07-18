import { z } from 'zod'
//object schema
export const loginSchema=z.object({
    username: z.string({required_error:"Username is required"})
    .trim()
    .min(3,{message:"Username must be at least of 3 chars"})
,
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(7,{message:"Password must be at least of 6 characters"})
    ,
    email:z.string({required_error:"email is required"})
    .trim()
    .min(5,{message:"Email must be atleast of 5 characters"})
})
export type LoginSchema = z.infer<typeof loginSchema>;