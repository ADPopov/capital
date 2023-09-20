"use client"
import React from 'react';
import Link, { type LinkProps } from 'next/link';

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

const LinkButton = (props: LinkButtonProps) => {
    return (
        <Link {...props}>
            {props.children}
        </Link>
    );
};

export default LinkButton;