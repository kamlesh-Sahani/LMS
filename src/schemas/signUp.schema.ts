import {z} from 'zod';

export const signUoSchema = z.object({
    firtName:z
    .string()
    .min(2,{message:"first name minimum 2 charaters"})
    .max(20,{message:"first name maximum 20 charaters"}),
    lastName:z.string()
    .min(2,{message:"last name minimum 2 character"})
    .max(20,{message:"last name maximum is 20 characters"})

    // others
    

}) 