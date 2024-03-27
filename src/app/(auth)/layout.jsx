import React from "react"
export default function AuthLayout(
    {
        children
    }
) {
    return (
        <div className="h-screen flex items-center flex-col justify-center gap-6">
            {children}
        </div>
    )
};

