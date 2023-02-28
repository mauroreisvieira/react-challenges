import React, { useRef, useEffect } from "react";
import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Typography } from "../components/Typography";

const Memory = (): React.ReactElement => {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        console.log("href:", ref.current?.href);
    }, []);

    return (
        <>
            <Navigation />
            <Main>
                <Typography size="h1">Memory Game</Typography>
            </Main>
        </>
    );
};

export default Memory;
