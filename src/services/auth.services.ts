import { LoginSchema, RegisterSchema } from "@/schemas/auth.schema";



export async function ApiRegister(data:RegisterSchema) {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
    const responseData = await response.json()
    return responseData;
}

export async function ApiLogin(data:LoginSchema) {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
    const responseData = await response.json()
    return responseData;
}