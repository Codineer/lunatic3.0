import React from "react"
import { Logo } from "./_components/logo"
import Navbar from "./_components/navbar"
export default function AuthLayout(
    {
        children
    }
) {
    return (
        <div className="h-screen flex items-center flex-col justify-center gap-6">
            <Navbar />
            <Logo/>
            {children}
        </div>
    )
};

