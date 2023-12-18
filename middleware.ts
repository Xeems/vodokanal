import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(request: NextRequestWithAuth) {

        if (request.nextUrl.pathname.startsWith("/Admin")
            && request.nextauth.token?.user.roles?.includes("ADMIN")) {
            return NextResponse.rewrite(
                new URL("/Admin", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

// export const config = {matcher:[
//     "/",
//     "/Admin"
// ]}