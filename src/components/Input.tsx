import React from 'react';
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({className, ...props}: InputProps) => {
    return <input {...props}
                  className={clsx("block bg-gray-100 border border-gray-200 w-full rounded-2xl text-lg px-5 h-14 outline-0 focus:border-violet-400", className)}/>
};

export default Input;