import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
// import Auth0Provider from 'next-auth/providers/auth0';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        // Auth0Provider({
        //     clientId: process.env.AUTH0_CLIENT_ID,
        //     clientSecret: process.env.AUTH0_CLIENT_SECRET,
        //     issuer: process.env.AUTH0_ISSUER_BASE_URL,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})