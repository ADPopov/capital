"use client"
import React from 'react';
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button {...props} className={clsx("px-8 py-4 rounded-full bg-violet-500 text-gray-50 text-2xl " +
            "hover:bg-violet-600", className)}>
            {children}
        </button>
    );
};

export default Button;