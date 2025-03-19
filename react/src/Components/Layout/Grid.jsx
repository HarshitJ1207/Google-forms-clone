import React from "react";
import "./Grid.css";

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
    const localClassName = `
        grid 
        grid-columns-${columns} 
        grid-rows-${rows} 
        grid-gap-${gap} 
        grid-justify-${justify} 
        grid-align-${align} 
        ${className}
    `.trim();

    return (
        <div className={localClassName} style={style} onClick={onClick}>
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