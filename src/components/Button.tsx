"use client"
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children}: ButtonProps) => {
    return (
        <button className={"px-8 py-4 rounded-full bg-violet-500 text-gray-50 text-2xl " +
            "hover:bg-violet-600"}>
            {children}
        </button>
    );
};

export default Button;