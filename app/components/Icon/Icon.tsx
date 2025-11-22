"use client";
import Image from "next/image";
import type { IconProps } from "./props";
import { useState, useEffect } from "react";

export const Icon = (props: IconProps) => {
    const [isActive, setIsActive] = useState(props.isActive || false);
    const [href, setHref] = useState<string>('/')

    const handleClick = (e: React.MouseEvent) => {
        // მხოლოდ toggleable აიკონები იცვლება
        if (props.toggleable) {
            setIsActive((prev) => !prev);
        }

        if (props.onClick) {
            props.onClick(e);
        }
    };

    useEffect(() => {
        if (props.isActive !== undefined) {
            setIsActive(props.isActive);
        }
    }, [props.isActive]);

    const src = `/${props.name}${
        isActive ? "-active" : ""
    }.svg`;

    useEffect(() => {
        if(props.name) setHref(src)

        if(props.online) setHref(props.online)
    }, [props.name, props.online])

    return (
        <Image
            src={href}
            alt={`${props.name} icon`}
            width={props.width}
            height={props.height}
            onClick={handleClick}
            className={props.className}
            style={{cursor:'pointer'}}
        />
    );
};