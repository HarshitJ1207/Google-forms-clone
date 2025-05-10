import React from "react";

export default function Grid({
    columns = "1fr 1fr",
    rows = "auto",
    gap = "1rem",
    justifyContent = "start",
    alignContent = "start",
    justifyItems = "center",
    alignItems = "center",
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
        justifyContent: justifyContent,
        alignContent: alignContent,
        justifyItems: justifyItems,
        alignItems: alignItems,
        ...style,
    };

    return (
        <div className={`grid ${className}`} style={combinedStyle} onClick={onClick}>
            {children}
        </div>
    );
}

Grid.JUSTIFYCONTENT = {
    START: "start",
    END: "end",
    CENTER: "center",
    SPACE_BETWEEN: "space-between",
    SPACE_AROUND: "space-around",
    SPACE_EVENLY: "space-evenly",
};

Grid.JUSTIFYITEMS = {
    START: "start",
    END: "end",
    CENTER: "center",
}

Grid.ALIGNCONTENT = {
    START: "start",
    END: "end",
    CENTER: "center",
    SPACE_BETWEEN: "space-between",
    SPACE_AROUND: "space-around",
    SPACE_EVENLY: "space-evenly",
};

Grid.ALIGNITEMS = {
    START: "start",
    END: "end",
    CENTER: "center",
}
