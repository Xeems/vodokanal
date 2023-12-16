import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name: string
            roles: string[]
            access_token: string
        } & DefaultSession
    }

    interface User extends DefaultUser {
        id: string,
        name: string
        roles: string[]
        access_token: JWT
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: User
    }
}