import React, { useRef, useEffect } from "react";
import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Typography } from "../components/Typography";

const Home = (): React.ReactElement => {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        console.log("href:", ref.current?.href);
    }, []);

    return (
        <>
            <Navigation />
            <Main>
                <div className="flex justify-between items-center">
                    <Typography size="h1">
                        Home
                    </Typography>
                </div>
            </Main>
        </>
    );
};

export default Home;
