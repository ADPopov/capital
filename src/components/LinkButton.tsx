import Link, {type LinkProps} from 'next/link';
import React from 'react';

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

const LinkButton = (props: LinkButtonProps) => {
    return (
        <Link {...props}>
            {props.children}
        </Link>
    );
};

export default LinkButton;