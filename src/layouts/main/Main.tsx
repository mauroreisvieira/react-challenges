import React from 'react';
import { classNames } from "../../utils/functions";

interface MainProps {
    className?: string;
    children?: React.ReactNode;
}

export const Main = ({ className, children }: MainProps): React.ReactElement => (
    <main className={classNames("max-w-7xl mx-auto px-2 sm:px-6 lg:px-8", className)}>
        { children }
    </main>
);

