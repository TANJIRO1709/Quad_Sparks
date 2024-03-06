"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("login Success", response.data);
            router.push("/profile")
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);

        } else {
            setButtonDisabled(true);
        }

    }, [user]);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-7xl font-serif">{loading ? "processing" : "login"}</h1>
            <hr className="bg-white-500" />
            <div className="h-10"></div>
            <label htmlFor="email" className="text-2xl font-serif py-2">Email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <label htmlFor="password" className="text-2xl font-serif py-2">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="text"
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button
                onClick={onLogin}
                className="p-2 w-36 font-serif border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-sky-500">Login Here</button>
            <Link href="/signup" className="text-xl font-serif py-2 hover:text-blue-500">Visit Signup page</Link>
        </div>
    )
}