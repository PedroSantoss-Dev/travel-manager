import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"

import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db as any),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENTID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text", placeholder: "John Smith" },
      },
      async authorize(credentials, req): Promise<any> {
        const user = {email:"test@test.com", password:"1234"}
     
        return user
    }
    }),
  ],
  session: {
    strategy:"jwt"
  },
  secret:process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
};
