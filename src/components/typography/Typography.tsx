import React, { forwardRef } from "react";
import { classNames } from "../../utils/functions";
import {
    PolymorphicPropsWithRef,
    PolymorphicForwardRefExoticComponent,
} from "../polymorphic";

const defaultElement = "p";

const SizeMap = {
    h1: "font-semibold text-5xl mb-6",
    h2: "font-semibold text-4xl mb-4",
    h3: "font-semibold text-3xl mb-4",
    h4: "font-semibold text-2xl mb-3",
    h5: "font-semibold text-xl mb-3",
    h6: "font-semibold text-base mb-2",
    a: "text-indigo-500 hover:text-indigo-700 hover:underline underline-offset-4 mb-2",
    p: "text-base mb-2",
};

interface TypographyOwnProps
    extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
    size?: keyof typeof SizeMap;
}

export type TypographyProps<
    T extends React.ElementType = typeof defaultElement
> = PolymorphicPropsWithRef<TypographyOwnProps, T>;

export const Typography: PolymorphicForwardRefExoticComponent<
    TypographyOwnProps,
    typeof defaultElement
> = forwardRef(
    <T extends React.ElementType = typeof defaultElement>(
        {
            as,
            size,
            className,
            ...restProps
        }: PolymorphicPropsWithRef<TypographyOwnProps, T>,
        ref: React.ComponentPropsWithRef<T>["ref"]
    ) => {
        const Element = as || defaultElement;

        const defaultSize =
            size ||
            (Object.keys(SizeMap).find(
                (key) => key === as
            ) as TypographyOwnProps["size"]);

        const computedClasses = classNames(
            defaultSize && SizeMap[defaultSize],
            className
        );

        return <Element ref={ref} className={computedClasses} {...restProps} />;
    }
);

Typography.displayName = "Typography";
