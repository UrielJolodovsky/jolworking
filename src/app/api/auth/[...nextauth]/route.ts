import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "@/lib/db";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            tipo_usuario: string;
            // ...other properties
            // role: UserRole;
        } & DefaultSession["user"];
    }
}

export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
        if (token) {
            session.user.id = token.id as string;
        }
        return session;
    },
    jwt({ token, user }) {
        if (user) {
            token.id = user.id as string;
        }
        return token;
    }
  },
  secret: process.env.SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }