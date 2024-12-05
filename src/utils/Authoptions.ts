import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const AuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "emailPhone", type: "text", placeholder: "email / phone" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    // console.log('Im in user form login', credentials);

                    const { emailPhone, password } = credentials as any;
                    if (!emailPhone || !password) throw new Error("Please, fill all input!");

                    const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ emailPhone, password })
                    });
                    const result = await loginResponse.json();

                    console.log(result);

                    if (!loginResponse.ok) {
                        throw new Error(result.message || 'Login failed');
                    }

                    return result.user;

                } catch (err) {
                    const error = err as Error;
                    console.error(error.message);
                    throw new Error(JSON.stringify(error.message || 'internet connection error'));
                }
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }: any) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    pages: {
        signIn: '/login',
    },
};