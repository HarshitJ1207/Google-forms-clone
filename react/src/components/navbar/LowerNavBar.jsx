import { useState } from 'react';
import Button from '../Elements/Button';
import './lowerNavbar.css'
import FlexBox from '../Layout/FlexBox';
export default function LowerNavbar(){
    const [selected, setSelected] =  useState(0);
    const getButtonProps = (ix) => {
        return {
            options: {
                variant: 'secondary',
            },
            handlers: {
                onClick: () => setSelected(ix)
            },
            className: ix === selected ? 'navbar-lower__button navbar-lower__button--selected' : 'navbar-lower__button'
        }
    }
    return (
        <FlexBox gap = '0' justify='center'>
            <Button {...getButtonProps(0)}> Questions </Button>
            <Button {...getButtonProps(1)}> Responses </Button>
            <Button {...getButtonProps(2)}> Settings </Button>
        </FlexBox>
    );
}