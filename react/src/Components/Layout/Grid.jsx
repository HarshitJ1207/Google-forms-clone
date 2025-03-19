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
    onClick = () => {}
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
        <div className={`grid ${className}`} style={combinedStyle} onClick={onClick}>
            {children}
        </div>
    );
}

Grid.JUSTIFY = {
    START: "start",
    END: "end",
    CENTER: "center",
    SPACE_BETWEEN: "space-between",
    SPACE_AROUND: "space-around",
    SPACE_EVENLY: "space-evenly",
    STRETCH: "stretch"
};

Grid.ALIGN = {
    START: "start",
    END: "end",
    CENTER: "center",
    STRETCH: "stretch"
};
