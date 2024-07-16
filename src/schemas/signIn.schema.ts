import {z} from 'zod';

export const signInSchema = z.object({
    email:z.string()
    .max(20,{message:"email maximum characters is 20"})
    .email({message:"Invalid email address"}),

    password:z.string()
    .min(6,{message:"password must be at least 6 characters"})
    .max(20,"password not more than 20")
})