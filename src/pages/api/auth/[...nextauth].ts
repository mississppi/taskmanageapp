import NextAuth from "next-auth";
import { Session, User} from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token, user }: { session: Session; token: JWT; user: User }) {
            // セッションにカスタムデータを追加したい場合はここで処理
            return session;
        },
        async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            return `${baseUrl}/dashboard`;
        }
    },
};

export default NextAuth(authOptions);
