import React from 'react';
import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
    return (
        // decides the size of text on output screen 
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    );
};

export default Screen;