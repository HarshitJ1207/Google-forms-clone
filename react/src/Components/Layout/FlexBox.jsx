import React from "react";
import "./FlexBox.css";

export default function FlexBox({
    direction = "row",
    gap = "1rem",
    justify = "flex-start",
    align = "center",
    className = "",
    style = {},
    children,
    onClick = () => {}
}) {
    const localClassName = `
        flexbox 
        flexbox-direction-${direction} 
        flexbox-justify-${justify} 
        flexbox-align-${align}
        ${className}
    `.trim();

    const styles = {
        gap: gap,
        ...style
    }
    return (
        <div className={localClassName} style={styles} onClick={onClick}>
            {children}
        </div>
    );
}

FlexBox.DIRECTION = {
    ROW: 'row',
    COLUMN: 'column'
};

FlexBox.JUSTIFY = {
    FLEX_START: 'flex-start',
    FLEX_END: 'flex-end',
    CENTER: 'center',
    SPACE_BETWEEN: 'space-between',
    SPACE_AROUND: 'space-around',
    SPACE_EVENLY: 'space-evenly'
};

FlexBox.ALIGN = {
    FLEX_START: 'flex-start',
    FLEX_END: 'flex-end',
    CENTER: 'center',
    BASELINE: 'baseline',
    STRETCH: 'stretch'
};