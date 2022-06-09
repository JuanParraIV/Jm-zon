
import NextAuth from "next-auth"
import googleProvider from "next-auth/providers/google"
import facebookProvider from "next-auth/providers/facebook"
import githubProvider from "next-auth/providers/github"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    facebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    githubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})