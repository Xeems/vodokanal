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
                const url = `${serverUrl}/auth/login`

                const response = await axios.post(url, {
                    login: username,
                    password: password,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.status == 201)
                    return response.data
                else
                    return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.user = token
            return session
        }
    },

    pages: {
        signIn: '/auth',
        signOut: '/'
    }
}

export default NextAuth(authOptions)




