"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
//import router from "next/router";

export default function UserProfilePage({ params }: any) {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successful')
            router.push('/login')

        } catch (error: any) {
            toast.error(error.message);
        }
    }
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-6xl">Profile</h1>
            <hr />
            <div className="h-10"></div>
            <p className="text-4xl">Profile Page</p>
            <h2 className="p-1 rounded bg-green-500">{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl font-serif">Logout</button>
            <button onClick={getUserDetails} className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl font-serif">GetUser Details</button>
        </div>
    )
}