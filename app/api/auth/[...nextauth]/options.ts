import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import axios from 'axios';
import { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "login", type: "text", placeholder: "login" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials): Promise<any> {
                const { username, password } = credentials as any
                const serverUrl = process.env.SERVER_URL
                const url = `${serverUrl}auth/login`

                const response = await axios.post(url, {
                    login: username,
                    password: password,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.data) {
                    return response.data
                }
                else
                    return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user)
                token.user = {...user}
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (token) {
                session.user.id = token.user.userId as string
                session.user.name = `${token.user.familyName} ${token.user.firstName} ${token.user.middleName}` as string
                session.user.roles = token.user.roles as string[]
                session.user.access_token = token.user.access_token as string
            }
            return session
        },
    },

    pages: {
        signIn: '/auth',
        signOut: '/'
    }
}

export default NextAuth(authOptions)




