import React from "react";

interface HighlightedProps {
    match?: string;
    children?: string;
}

export const Highlighted = ({
    match = "",
    children = "",
}: HighlightedProps): React.ReactElement => {
    if (!match.trim()) {
        return <span>{children}</span>;
    }
    const regex = new RegExp(`(${match})`, "gi");
    const parts = children.split(regex);
    return (
        <>
            {parts
                .filter((part) => part)
                .map((part, i) =>
                    regex.test(part) ? (
                        <strong className="text-blue-500" key={i}>{part}</strong>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
        </>
    );
};
