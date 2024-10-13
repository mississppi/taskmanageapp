'use client'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
    const { data: session } = useSession();

    if (session) {
        return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">ログイン成功</h1>
            <p>こんにちは、{session.user?.name} さん！</p>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => signOut()}
            >
            ログアウト
            </button>
        </div>
        );
    }

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">ログイン</h1>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => signIn("google")}
        >
            Googleでログイン
        </button>
        </div>
    );
}
