import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import {
  authController,
  authService,
} from '../../../backend/auth/infranstucture/container/auth.container'
import { RequestEntity } from '../../../backend/common/models/request.value'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here

    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Correo:',
          type: 'email',
          placeholder: 'correo@google.com',
        },
        password: {
          label: 'Contraseña:',
          type: 'password',
          placeholder: 'Contraseña',
        },
      },
      async authorize(credentials) {
        console.log({ credentials })
        // return { name: 'Juan', correo: 'juan@google.com', role: 'admin' };
        return authService.login(new RequestEntity(credentials))
      },
    }),
  ],

  // Custom Pages
  pages: {
    signIn: '/login',
    newUser: '/registro',
  },
})
