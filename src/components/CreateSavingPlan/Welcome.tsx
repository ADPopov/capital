'use client'
import React from 'react';

import Button from "~/components/Button";

const Welcome = ({ nextStep }: { nextStep: () => void }) => {
    return (
        <>
            <div className={'text-6xl text-gray-900 mb-5'}>
                Welcome<br/>
                to <span
                className={"font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-violet-600"}>Capital</span>
            </div>
            <div className={'text-3xl font-medium text-gray-600 mb-10'}>
                You personal<br/>
                savings assistant
            </div>
            <div className={"flex justify-center"}>
                <Button onClick={nextStep}>
                    Let&apos;s start!
                </Button>
            </div>
        </>
    );
};

export default Welcome;