import React from "react";
export default function FlexBox({
    direction = "row",
    gap = "1rem",
    justify = "flex-start",
    align = "center",
    className = "",
    style = {},
    children,
    handlers
}) {
    const combinedStyle = {
        display: "flex",
        flexDirection: direction,
        gap: gap,
        justifyContent: justify,
        alignItems: align,
        ...style,
    };
    return <div className={`flexbox ${className}`} style={combinedStyle} {...handlers}>{children}</div>;
}
