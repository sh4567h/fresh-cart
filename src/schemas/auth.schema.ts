import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty('Name Required').min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
          rePassword: z.string().trim(), 
    phone: z
      .string()
      .regex(/^(01)[0-2,5]{1}[0-9]{8}$/, "Invalid Egyptian phone number"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z
  .object({
       email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
         
  })

export type LoginSchema = z.infer<typeof loginSchema>;