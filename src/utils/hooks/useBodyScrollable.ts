import { useState, useEffect } from "react";

export function useBodyScrollable(): boolean {
    const [bodyScrollable, setBodyScrollable] = useState(
        document.body.scrollHeight > window.innerHeight
    );

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setBodyScrollable(document.body.scrollHeight > window.innerHeight);
        });
        resizeObserver.observe(document.body);
        return () => {
            resizeObserver.unobserve(document.body);
        };
    }, []);

    return bodyScrollable;
}
