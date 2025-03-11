import React from "react";

export default function Grid({
    columns = "1fr 1fr",
    rows = "auto",
    gap = "1rem",
    justify = "start",
    align = "start",
    className = "",
    style = {},
    children,
    handlers
}) {
    const combinedStyle = {
        display: "grid",
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gap: gap,
        justifyContent: justify,
        alignContent: align,
        ...style,
    };

    return (
        <div className={`grid ${className}`} style={combinedStyle} {...handlers}>
            {children}
        </div>
    );
}
