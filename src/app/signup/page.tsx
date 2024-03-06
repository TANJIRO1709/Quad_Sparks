"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    //const [username, setUsername] = React.useState("");
    //const [password, setPassword] = React.useState("");

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup Success", response.data);
            router.push("/login")
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);

        } else {
            setButtonDisabled(true);
        }

    }, [user]);
    return (
        <div >
            <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
                <h1 className="text-7xl font-serif">{loading ? "Processing" : "Signup"}</h1>
                <div className="h-10"></div>
                <hr />
                <label htmlFor="username" className="text-2xl font-serif py-2">Username</label>
                <input
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    id="username"
                    type="text"
                    value={user.username}
                    placeholder="username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })} />

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
                <div className="h-10"></div>
                <button
                    onClick={onSignup}
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-sky-500 w-36 text-2xl">{buttonDisabled ? "No signup" : "Signup"}</button>
                <Link href="/login" className="text-xl font-serif py-2 hover:text-blue-500">Visit Login page</Link>
            </div>
        </div>
    )
}