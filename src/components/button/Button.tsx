import React, { forwardRef } from "react";
import { classNames } from "../../utils/functions";
import {
    PolymorphicPropsWithRef,
    PolymorphicForwardRefExoticComponent,
} from "../polymorphic";

const defaultElement = "button";

const SizeMap = {
    xs: "text-xs py-1 px-2",
    sm: "text-sm py-1 px-2",
    md: "text-sm py-2 px-4",
    lg: "text-base py-3 px-6",
} as const;

const SkinMap = {
    primary:
        "text-white bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-800 ring-indigo-500",
    secondary:
        "text-white bg-gray-500 hover:bg-gray-700 active:bg-gray-800 ring-indigo-500",
    danger: "text-white bg-rose-500 hover:bg-rose-700 active:bg-rose-800 ring-indigo-500",
    success:
        "text-white bg-emerald-500 hover:bg-emerald-700 active:bg-emerald-800 ring-indigo-500",
    ghost: "text-current hover:bg-gray-100 active:bg-gray-200 ring-indigo-500",
} as const;

interface ButtonOwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    skin?: keyof typeof SkinMap;
    size?: keyof typeof SizeMap;
    pill?: boolean;
}

export type ButtonProps<T extends React.ElementType = typeof defaultElement> =
    PolymorphicPropsWithRef<ButtonOwnProps, T>;

export const Button: PolymorphicForwardRefExoticComponent<
    ButtonOwnProps,
    typeof defaultElement
> = forwardRef(
    <T extends React.ElementType = typeof defaultElement>(
        {
            as,
            skin = "primary",
            size = "md",
            pill = false,
            className,
            disabled,
            onClick,
            children,
            ...restProps
        }: PolymorphicPropsWithRef<ButtonOwnProps, T>,
        ref: React.ComponentPropsWithRef<T>["ref"]
    ): React.ReactElement => {
        const Element = as || defaultElement;

        const computedClasses = classNames(
            "inline-flex items-center font-normal rounded cursor-pointer",
            "focus-within:outline-none focus-within:ring-offset-2 focus-within:ring-1",
            pill && "rounded-full",
            disabled && "opacity-50 pointer-events-none",
            SkinMap[skin],
            SizeMap[size],
            className
        );

        const onHandleClick = (
            e: React.MouseEvent<HTMLButtonElement>
        ): void => {
            if (disabled) return;
            if (onClick) onClick(e);
        };

        return (
            <Element
                ref={ref}
                tabIndex={disabled ? -1 : 0}
                className={computedClasses}
                onClick={onHandleClick}
                {...restProps}
            >
                {children}
            </Element>
        );
    }
);

Button.displayName = "Button";
