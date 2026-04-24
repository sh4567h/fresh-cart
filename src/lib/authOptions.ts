import { NextAuthOptions } from "next-auth";
import { jwtDecode, JwtPayload } from "jwt-decode";

import Credentials from "next-auth/providers/credentials";

interface CustomJwtPayload extends JwtPayload {
  id: string
}
export const authOptions : NextAuthOptions={
    pages:{
        signIn: '/login',
    },
    providers: [
 Credentials({
       name: 'Credentials',
    credentials: {
      email: {  },
      password: { }
    },
    async authorize(credentials, req) {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()
  if(data.message =='success'){
 const decodedToken = jwtDecode<CustomJwtPayload>(data.token)

 console.log(decodedToken ,'decodedTokenNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')
 console.log(data)
 
    return{
        id:decodedToken?.id,
        user:data.user,
        token : data.token
    }

  }else{
    throw new Error(data.message ||"something went rong")
  }
    }
  })
] ,
 callbacks:{
    async jwt({ token, user }) {
      if(user){
        token.user = user.user,
         token.token = user.token
      }
      return  token;
    } ,
     async session({ session, user, token }) {
     if(token){
       session.user= token.user;
     }
      return session
    },
 }
}