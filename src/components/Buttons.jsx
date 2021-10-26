import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Buttons = ({ orderChange }) => {
    return (
        <>
            <button
                className="prev"
                onClick={() => {
                    orderChange("left");
                }}
            >
                <FiChevronLeft />
            </button>
            <button
                className="next"
                onClick={() => {
                    orderChange("right");
                }}
            >
                <FiChevronRight />
            </button>
        </>
    );
};

export default Buttons;
