import { access } from 'fs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { off } from 'process'
import {
  authController,
  authService,
} from '../../../backend/auth/infranstucture/container/auth.container'
import { RequestEntity } from '../../../backend/common/models/request.value'
import { loginService } from '../../../services/auth'

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
        console.log('credentials: ', credentials)
        // return authService.login(new RequestEntity(credentials))

        // const login = await loginService({
        //   correo: credentials?.email,
        //   contrasena: credentials?.password,
        // })
        // console.log({ login })
        return { email: 'david@gmail.com', password: '123456' }
      },
    }),
  ],

  // Custom Pages
  // pages: {
  //   signIn: '/login',
  //   newUser: '/registro',
  // },

  jwt: {
    // secret: process.env.ENV_KEY_TOKEN, // deprecated
    //! This automatically take the proccess.env.NEXTAUTH_SECRET
  },

  callbacks: {
    async jwt({ token, account, user }) {
      //   console.log({ token, account, user })

      if (account) {
        token.accessToken = account.access_token

        switch (account.type) {
          case 'credentials':
            token.user = user
            break

          case 'oauth':
          //TODO: make of social networks
        }
      }
      return token
    },

    async session({ session, token, user }) {
      //   console.log({ session, token, user })

      session.accessToken = token.accessToken
      session.user = token.user
      return session
    },
  },
})
