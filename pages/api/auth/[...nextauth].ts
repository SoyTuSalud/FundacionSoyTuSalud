import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [

    Credentials({
      name: 'Custom Login',
      credentials : {
        correo:{
          label: 'Correo', type: 'email', placeholder:'tu correo'
        },
        contrasena:{
          label: 'Contraseña', type: 'password', placeholder:'Contraseña'
        }
      },
      async authorize(credentials){
        console.log({credentials})
        return {name:'juan', correo: 'juan@google.com'}
      }
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)